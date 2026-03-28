---
layout: post
title: Collaborative Editing Configuration in Vue Diagram | Syncfusion
description: Checkout and learn to configure SignalR and Redis for real-time collaborative editing in Syncfusion Vue Diagram.
control: Diagram
documentation: ug
platform: ej2-vue
domainurl: ##DomainURL##
---

# SignalR hub configuration in Vue application

## Overview
This guide explains how to configure SignalR Hub in a Vue application for real-time collaborative diagram editing.

## Prerequisites

* [System requirements for Vue components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## How to create Vue sample

To create a Vue application, follow the steps outlined in the Vue [Getting Started](https://ej2.syncfusion.com/vue/documentation/diagram/getting-started-vue-3) documentation.

## How to add packages in the Vue application

Open the terminal and install the following packages using npm.

* @microsoft/signalr
* @syncfusion/ej2-vue-diagrams

## Configure SignalR service in Vue application

To enable real-time collaboration, configure SignalR HubConnection in your Vue component as follows:

* Initialize the `HubConnection` within a `onMounted` life cycle hook and start it using `start()`.
* Connect to the `/diagramHub` endpoint with WebSocket transport `skipNegotiation: true` and enable automatic reconnect to handle transient network issues.
* Subscribe to the `OnConnectedAsync` callback to receive the unique connection ID, confirming a successful handshake with the server.
* Join a SignalR group by calling `JoinDiagram(roomName)` after connecting. This ensures updates are shared only with users in the same diagram session.
* Refer to Create Vue [Simple Diagram](https://ej2.syncfusion.com/vue/documentation/diagram/getting-started-vue-3)

```typescript
<template>
  <div>
    <!-- Diagram component will be added here -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as signalR from '@microsoft/signalr';

const connection = ref<signalR.HubConnection | null>(null);
const roomName = ref('Syncfusion');

onMounted(() => {
  initializeSignalRConnection();
});

const initializeSignalRConnection = async () => {
  if (connection.value === null) {
    // Create connection
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('<<Your ServiceURL>>', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();

    // Triggered when the connection to the SignalR Hub is successfully established
    newConnection.on('OnConnectedAsync', (id: string) => {
      onConnectedAsync(id);
    });

    try {
      await newConnection.start();
      console.log('Connected to SignalR Hub');
      connection.value = newConnection;
    } catch (error) {
      console.error('Connection failed:', error);
    }
  }
};

const onConnectedAsync = (id: string) => {
  if (id && id.length > 0) {
    console.log('Connection ID:', id);
    // Join the room after connection is established
    connection.value?.invoke('JoinDiagram', roomName.value)
      .catch((error: Error) => {
        console.error('JoinDiagram failed:', error);
      });
  }
};

onBeforeUnmount(() => {
  if (connection.value && connection.value.state === signalR.HubConnectionState.Connected) {
    connection.value.stop();
  }
});
</script>
```

>**Notes:**
>* Use a unique `roomName` per diagram (e.g., a diagram ID) to isolate sessions.
>* If `WebSockets` may be unavailable, remove `SkipNegotiation` so SignalR can fall back to SSE or Long Polling.
>* Consider handling reconnecting/disconnected states in the UI and securing the connection with authentication, if required.


## Sending and applying real-time diagram changes

* The Vue Diagram component triggers the [historyChange](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#historychange) event whenever the diagram is modified (e.g., add, delete, move, resize, or edit nodes/connectors).
* Use [getDiagramUpdates](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#getdiagramupdates) to produce a compact set of incremental updates (JSON-formatted changes) representing just the changes, not the entire diagram.
* Send these changes to the hub method `BroadcastToOtherUsers`, which relays them to all users joined to the same SignalR group (room).
* Each remote user listens for ReceiveData and applies the incoming changes with [setDiagramUpdates](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#setdiagramupdates), keeping their view synchronized without reloading the full diagram.
* Enable the [enableCollaborativeEditing](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#enablecollaborativeediting)` property on the diagram to treat multi-step edits (like drag/resize sequences or batch changes) as a single operation.

```typescript
<template>
  <div>
    <DiagramComponent
      ref="diagramRef"
      id="diagram"
      width="100%"
      height="700px"
      :nodes="[]"
      :connectors="[]"
      :enableCollaborativeEditing="true"
      @historyChange="onHistoryChange"
    >
    </DiagramComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import * as signalR from '@microsoft/signalr';

const diagramRef = ref<InstanceType<typeof DiagramComponent> | null>(null);
const connection = ref<signalR.HubConnection | null>(null);
const roomName = ref('Syncfusion');

onMounted(() => {
  initializeConnection();
});

const initializeConnection = async () => {
  if (connection.value === null) {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('<<Your ServiceURL>>', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();

    // Listen for remote changes from other users
    newConnection.on('ReceiveData', (diagramChanges: string[]) => {
      if (diagramChanges && diagramChanges.length > 0) {
        if (diagramRef.value && diagramRef.value.setDiagramUpdates) {
          diagramRef.value.setDiagramUpdates(diagramChanges);
        }
      }
    });

    try {
      await newConnection.start();
      console.log('Connected to SignalR Hub');
      connection.value = newConnection;
    } catch (error) {
      console.error('Connection failed:', error);
    }
  }
};

const onHistoryChange = async (args: IHistoryChangeArgs) => {
  if (args && diagramRef.value && diagramRef.value.getDiagramUpdates) {
    // Get diagram updates (incremental changes) and send to hub
    const diagramChanges = diagramRef.value.getDiagramUpdates(args);
    
    // When enableCollaborativeEditing is enabled, retrieve diagramChanges only after the group action completes.
    if (diagramChanges && diagramChanges.length > 0) {
      // Send changes to the SignalR Hub for broadcasting
      if (connection.value && connection.value.state === signalR.HubConnectionState.Connected) {
        connection.value.invoke('BroadcastToOtherUsers', diagramChanges, roomName.value)
          .catch((err: Error) => {
            console.error('Send failed:', err);
          });
      }
    }
  }
};

onBeforeUnmount(() => {
  if (connection.value && connection.value.state === signalR.HubConnectionState.Connected) {
    connection.value.stop();
  }
});
</script>
```

## Conflict policy (optimistic concurrency) in Vue application

To maintain consistency during collaborative editing, each user applies incoming changes using [setDiagramUpdates](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#setdiagramupdates). After applying changes, the Vue sample synchronizes its `userVersion` with the  `serverVersion` through the `UpdateVersion` event. This version-based approach ensures conflicts are resolved without locking, allowing real-time responsiveness while preserving data integrity.

Add the following code in the Vue sample application:
```typescript
<template>
  <div>
    <DiagramComponent
      ref="diagramRef"
      width="100%"
      height="700px"
      :enableCollaborativeEditing="true"
      :nodes="[]"
      :connectors="[]"
      @historyChange="onHistoryChange"
    >
    </DiagramComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import * as signalR from '@microsoft/signalr';

const userVersion = ref<number>(0);
const diagramRef = ref<InstanceType<typeof DiagramComponent> | null>(null);
const connection = ref<signalR.HubConnection | null>(null);
const roomName = ref('Syncfusion');

onMounted(() => {
  initializeConnection();
});

const initializeConnection = async () => {
  if (connection.value === null) {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('<<Your ServiceURL>>', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();

    // Listen for remote changes with version tracking
    newConnection.on('ReceiveData', (diagramChanges: string[], serverVersion: number) => {
      applyRemoteDiagramChanges(diagramChanges, serverVersion);
    });

    // Listen for conflict notifications
    newConnection.on('ShowConflict', () => {
      showConflict();
    });

    // Listen for explicit version updates
    newConnection.on('UpdateVersion', (serverVersion: number) => {
      updateVersion(serverVersion);
    });

    try {
      await newConnection.start();
      console.log('Connected to SignalR Hub');
      connection.value = newConnection;
    } catch (error) {
      console.error('Connection failed:', error);
    }
  }
};

const applyRemoteDiagramChanges = (diagramChanges: string[], serverVersion: number) => {
  // Sets diagram updates to current diagram
  if (diagramRef.value && diagramRef.value.setDiagramUpdates) {
    diagramRef.value.setDiagramUpdates(diagramChanges);
  }
  // Update user version to server version after applying changes
  userVersion.value = serverVersion;
};

// Capture local changes and send with version and edited IDs
const onHistoryChange = async (args: IHistoryChangeArgs) => {
  if (!diagramRef.value) {
    return;
  }

  const diagramChanges = diagramRef.value.getDiagramUpdates(args);
  if (diagramChanges && diagramChanges.length > 0) {
    const editedElements = getEditedElements(args);
    // Send changes with version and edited element IDs
    if (connection.value && connection.value.state === signalR.HubConnectionState.Connected) {
      connection.value.invoke('BroadcastToOtherUsers', diagramChanges, userVersion.value, editedElements, roomName.value)
        .catch((err: Error) => {
          console.error('Send failed:', err);
        });
    }
  }
};

const getEditedElements = (args: any): string[] => {
  // Extract and return IDs of affected nodes/connectors from args
  // TODO: implement extraction logic based on historyChange event args
  return [];
};

const updateVersion = (serverVersion: number) => {
  userVersion.value = serverVersion;
};

const showConflict = () => {
  // Show notification to inform user their update was rejected due to conflict
  const message = "Your changes conflicted with another user's updates and were not applied. Please refresh to see the latest version.";
  alert(message);
};

onBeforeUnmount(() => {
  if (connection.value && connection.value.state === signalR.HubConnectionState.Connected) {
    connection.value.stop();
  }
});
</script>
```