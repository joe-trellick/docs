---
title: '4 - Integrate Ditto'
---

## 4-1 Integrate Ditto

To finish the app, we now need to integrate Ditto. We will initialize it in the `onCreate()` function within `MainActivity`. Furthermore, we will add handlers for the swipe to delete and listening for row clicks to mark a task as completed (or in-completed). Replace the existing `onCreate()` code with this:

```kotlin title=MainActivity
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    setSupportActionBar(toolbar)

    // Setup the layout
    viewManager = LinearLayoutManager(this)
    val tasksAdapter = TasksAdapter()
    viewAdapter = tasksAdapter

    recyclerView = findViewById<RecyclerView>(R.id.recyclerView).apply {
        setHasFixedSize(true)
        layoutManager = viewManager
        adapter = viewAdapter
    }

    recyclerView.addItemDecoration(DividerItemDecoration(this, DividerItemDecoration.VERTICAL))

    // Create an instance of Ditto
    val androidDependencies = DefaultAndroidDittoDependencies(applicationContext)
    val ditto = Ditto(androidDependencies)
    this.ditto = ditto

    // Set your Ditto access license
    // The SDK will not work without this!
    ditto.setLicenseToken("<INSERT ACCESS LICENSE>")

    // This starts Ditto's background synchronization
    ditto.tryStartSync()

    // Add swipe to delete
    val swipeHandler = object : SwipeToDeleteCallback(this) {
        override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {
            val adapter = recyclerView.adapter as TasksAdapter
            // Retrieve the task at the row swiped
            val task = adapter.tasks()[viewHolder.adapterPosition]
            // Delete the task from Ditto
            ditto.store.collection("tasks").findByID(task.id).remove()
        }
    }

    // Configure the RecyclerView for swipe to delete
    val itemTouchHelper = ItemTouchHelper(swipeHandler)
    itemTouchHelper.attachToRecyclerView(recyclerView)

    // Respond to new task button click
    addTaskButton.setOnClickListener { _ ->
        showNewTaskUI()
    }

    // Listen for clicks to mark tasks [in]complete
    tasksAdapter.onItemClick = { task ->
        ditto.store.collection("tasks").findByID(task.id).update { newTask ->
            newTask!!["isCompleted"].set(!newTask["isCompleted"].booleanValue)
        }
    }

    // This function will create a "live-query" that will update
    // our RecyclerView
    setupTaskList()

    // This will check if the app has location permissions
    // to fully enable Bluetooth
    checkLocationPermission()
}

```

The important things to note is that you need an access license to use Ditto. If you do not have one yet, reach out and we can supply one. To enable background synchronization, we need to call `tryStartSync()` which allows you to control when synchronization occurs. For this application we want it to run the entire time the app is in use.

## 4-2 Setup Live Query

Finally, we then use Ditto's key API to observe changes to the database by creating a live-query in the `setupTaskList()` function. This allows us to set the initial state of the `RecyclerView` after the query is immediately run and then subsequently get callbacks for any new data changes that occur locally or that were synced from other devices:


Note, that we are using the `observe` API in Ditto. This API performs two functions. First, it sets up a local observer for data changes in the database that match the query and second it creates a subscription for the same query that will be used to request this data from other devices. For simplicity, we are using this combined API, but you can also call them independently. To learn more, see the <a href="https://docs.ditto.live/concepts/syncing-data"> Observing Changes</a> section in the documentation.


```kotlin
fun setupTaskList() {
    // We will create a long-running live query to keep UI up-to-date
    this.collection = this.ditto!!.store.collection("tasks")

    // We use observe to create a live query with a subscription to sync this query with other devices
    this.liveQuery = collection!!.findAll().observe { docs, event ->
        val adapter = (this.viewAdapter as TasksAdapter)
        when (event) {
            is DittoLiveQueryEvent.Update -> {
                runOnUiThread {
                    adapter.set(docs)
                    adapter.inserts(event.insertions)
                    adapter.deletes(event.deletions)
                    adapter.updates(event.updates)
                    adapter.moves(event.moves)
                }
            }
            is DittoLiveQueryEvent.Initial -> {
                runOnUiThread {
                    adapter.setInitial(docs)
                }
            }
        }
    }
}
```

This is a best-practice when using Ditto, since it allows your UI to simply react to data changes which can come at any time given the ad-hoc nature of how Ditto synchronizes with nearby devices.

## 4-3 Check For Location Permissions

Android requires you to request location permissions to fully enable Bluetooth Low Energy (since Bluetooth can be involved with location tracking). Insert this function in `MainActivity`:

```kotlin title=MainActivity
fun checkLocationPermission() {
    // On Android, parts of Bluetooth LE and WiFi Direct require location permission
    // Ditto will operate without it but data sync may be impossible in certain scenarios
    if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
            != PackageManager.PERMISSION_GRANTED) {
        // For this app we will prompt the user for this permission every time if it is missing
        // We ignore the result - Ditto will automatically notice when the permission is granted
        ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.ACCESS_FINE_LOCATION), 0);
    }
}

```

## 4-4 Ensure Imports

Just in case your project did not auto import as you went along, you can replace the import statements in `MainActivity` with these:

```kotlin title=MainActivity
import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.graphics.*
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.fragment.app.DialogFragment
import androidx.recyclerview.widget.DividerItemDecoration
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.task_view.view.*
import live.ditto.*
import live.ditto.android.DefaultAndroidDittoDependencies
import java.time.Instant
```

## 4-5 Build and Run!

🎉 You now have a fully functioning Tasks app. Build and run it on a device. The simulator will not show any data sync because neither Bluetooth or the necessary network system is available to allow simulators to find each other or another device.

![](./android-sync.gif)

