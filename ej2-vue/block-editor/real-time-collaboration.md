---
layout: post
title: Real-time Collaboration in Vue Block Editor control | Syncfusion
description: Enable real-time collaboration in Syncfusion Vue Block Editor with live edits, user presence indicators, and version history for seamless teamwork.
platform: ej2-vue
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Real-time Collaboration in ##Platform_Name## Block Editor control

The Block Editor supports real-time collaborative editing, enabling multiple users to work on the same document simultaneously. Collaboration is powered by **Yjs**, a Conflict-free Replicated Data Type (CRDT) framework that synchronizes document changes across all connected users and automatically resolves conflicts.

With collaboration enabled, users can:

* Edit the same document in real time.
* View remote user cursors and selections.
* Track active collaborators.
* Perform collaboration-aware undo and redo operations.
* Create, restore, compare, export, and import document versions.

Try the live demo [here](https://ej2.syncfusion.com/showcase/vue/blockeditor-collaborative-editing/)

## Prerequisites

Before enabling collaboration, install the `yjs` library and a Yjs provider. See [Yjs Providers](https://docs.yjs.dev/ecosystem/connection-provider) to choose the right provider for your use case.

Inject the `Collaboration` module into the Block Editor before use.

```vue
<template>
  <ejs-blockeditor></ejs-blockeditor>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration } from '@syncfusion/ej2-vue-blockeditor';
import { provide } from 'vue';

// Provide required modules to EJ2 BlockEditor via Vue's provide/inject system
provide('blockeditor', [Collaboration]);
</script>
```

## Yjs Providers

A Yjs provider handles the transport of document updates between connected users. Choose a provider based on your deployment requirements.

| Provider | Type | Use Case |
| -------- | ---- | -------- |
| `y-websocket` | Self-hosted | Production deployments with your own WebSocket server. |
| `y-webrtc` | Peer-to-peer | Quick local testing and development; no server required. |
| `y-indexeddb` | Local storage | Offline persistence within a single browser. |
| [Hocuspocus](https://tiptap.dev/docs/hocuspocus/getting-started/overview) | Open-source server | Scalable Node.js server with pluggable storage and Redis support. |
| [Liveblocks](https://liveblocks.io/) | Fully managed | Hosted WebSocket infrastructure with REST API and DevTools. |
| [PartyKit](https://www.partykit.io/) | Serverless | Serverless provider on Cloudflare; ideal for prototyping. |

> **Note:** For development and testing, `y-webrtc` or PartyKit allow you to get started without a server. For production, use `y-websocket` or a managed provider such as Liveblocks or Hocuspocus for reliable, persistent synchronization.

## Configure collaboration settings

Use the `collaborationSettings` property of type `CollaborationSettingsModel` to configure collaboration settings for your Block Editor. It provides properties such as `provider`, `enableAwareness`, `adapter` and `versionHistory` which allows to customize the collaboration behavior.

## Getting Started

The following steps will help you set up real-time collaboration in the Block Editor using `Yjs`.

### Step 1: Create a Yjs document

Create a shared Yjs document and XML fragment.

```typescript
import * as Y from 'yjs';

const yDoc = new Y.Doc();
const yFragment = yDoc.getXmlFragment('blockeditor');
```

### Step 2: Create a Yjs adapter

Create an adapter that provides the Yjs runtime and the shared fragment to the Block Editor.

```typescript
import * as Y from 'yjs';

const adapter : YjsAdapter{
    yRuntime: Y,
    yXmlFragment: yFragment
};
```

### Step 3: Configure a provider

Create a provider that connects users to the same shared document. The following example uses `y-websocket` for production use. For local development, replace it with `y-webrtc` or a PartyKit provider — no server setup is required.

**Production (y-websocket):**

```typescript
import { WebsocketProvider } from 'y-websocket';

const provider = new WebsocketProvider(
    'wss://your-server-url',
    'document-room-id',
    yDoc
);
```

**Development (y-webrtc):**

```typescript
import { WebrtcProvider } from 'y-webrtc';

const provider = new WebrtcProvider('document-room-id', yDoc);
```

### Step 4: Enable Collaboration

Pass the adapter and provider to the Block Editor through the `collaborationSettings` property.

```vue
<template>
  <ejs-blockeditor  :collaborationSettings="collaborationSettings"></ejs-blockeditor>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration  } from "@syncfusion/ej2-vue-blockeditor";
import { provide, markRaw } from 'vue';
import * as Y from 'yjs';
import { type YjsAdapter } from '@syncfusion/ej2-vue-blockeditor';
import { WebsocketProvider } from 'y-websocket';

// Create a shared Yjs document for collaborative editing
const yDoc = new Y.Doc();
const yFragment = yDoc.getXmlFragment('blockeditor');

// Create adapter that provides Yjs runtime and shared fragment
const adapter: YjsAdapter = {
    yRuntime: Y,
    yXmlFragment: yFragment
};
// Create WebSocket provider for real-time synchronization
const provider = new WebsocketProvider(
    'wss://your-server-url',
    'document-room-id',
    yDoc
);
provide('blockeditor', [Collaboration]);
const collaborationSettings = {
    adapter: markRaw({
            yRuntime: markRaw(adapter.yRuntime),
            yXmlFragment: markRaw(adapter.yXmlFragment),
        }),
    provider: provider,
    enableAwareness: true,
};
</script>
```

## User presence and remote cursors

The Block Editor can display remote cursors, text selection overlays, and user details on hover. To enable these user presence features, set `enableAwareness` to `true` in `collaborationSettings` property.

```vue
<template>
  <ejs-blockeditor :collaborationSettings="collaborationSettings"></ejs-blockeditor>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration } from '@syncfusion/ej2-vue-blockeditor';
import { provide, markRaw } from 'vue';

const collaborationSettings = {
    adapter: markRaw({
        yRuntime: markRaw(adapter.yRuntime),
        yXmlFragment: markRaw(adapter.yXmlFragment),
    }),
    provider: provider,
    enableAwareness: true
};
provide('blockeditor', [Collaboration]);
</script>
```

## Configure the current user

Set the current user's display name and cursor highlight color using the `users` and `currentUserId` properties. The `avatarBgColor` value is used for that user's remote cursor and text selection overlay. The users property includes `id`, `user` and `avatarBgColor`.

```vue
<template>
  <ejs-blockeditor :users="users" :currentUserId="currentUserId"></ejs-blockeditor>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration } from '@syncfusion/ej2-vue-blockeditor';
import { provide, markRaw } from 'vue';

const users = [{
    id: 'user-1',
    user: 'John Doe',
    avatarBgColor: '#e74c3c'
}];

const currentUserId = 'user-1';
provide('blockeditor', [Collaboration]);
</script>
```

### Get Active Users

Retrieve all currently connected users.

```vue
<template>
  <div id='container'>
    <ejs-blockeditor ref="editor"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BlockEditorComponent as EjsBlockeditor } from '@syncfusion/ej2-vue-blockeditor';

const editor = ref(null);

const getUsers = () => {
  const users = editor.value.users;
};
</script>
```
## Collaborative Undo and Redo

Undo and redo operations are collaboration-aware.

Only changes made by the current user are included in that user's undo history. Undoing an action does not revert edits made by other collaborators.

## Version history

`Version History` allows you to capture document snapshots and restore earlier versions. This is a built-in capability of the Block Editor and does not require a third-party service.

### Enable version history

Inject the `VersionHistory` module and configure the `versionHistory` property under `collaborationSettings` property.

```vue
<template>
  <ejs-blockeditor><ejs-blockeditor/>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration, VersionHistory } from '@syncfusion/ej2-vue-blockeditor';
import { provide } from 'vue';

provide('blockeditor', [Collaboration, VersionHistory]);
</script>
```

Create a custom storage implementation:

```typescript
/**
 * Simple IndexedDB-based storage for version snapshots.
 * Implements IVersionStorage for persistence across browser sessions.
 */
export class CustomVersionStorage implements IVersionStorage {}
```

Configure collaboration settings with version history:

```vue
<template>
  <ejs-blockeditor :collaborationSettings="collaborationSettings"></ejs-blockeditor>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration, VersionHistory } from '@syncfusion/ej2-vue-blockeditor';
import { provide } from 'vue';

const myStorage = new CustomVersionStorage(`blockeditor-${uniqueId}`);

const collaborationSettings = {
    adapter: markRaw({
        yRuntime: markRaw(adapter.yRuntime),
        yXmlFragment: markRaw(adapter.yXmlFragment),
    }),
    provider: provider,
    versionHistory: {
        storage: myStorage,
        snapshotInterval: 3000
    }
};
provide('blockeditor', [Collaboration, VersionHistory]);
</script>
```

### Configure snapshot storage

Version snapshots need to be persisted to enable version history across browser sessions. Implement the `IVersionStorage` interface to provide a custom storage backend for managing snapshots. You can use IndexedDB, a backend database, or any other storage solution suitable for your deployment.

The `IVersionStorage` interface defines the following methods:

| Method | Signature | Description |
| -------- | -------- | ----------- |
| `saveSnapshot` | `(snapshot: VersionSnapshot): Promise<void>` | Persist a snapshot. |
| `loadAllSnapshots` | `(): Promise<VersionSnapshot[]>` | Load all persisted snapshots, ordered by timestamp ascending. |
| `loadSnapshot` | `(id: string): Promise<VersionSnapshot \| null>` | Load a single snapshot by id. |
| `deleteSnapshot` | `(id: string): Promise<void>` | Permanently remove a snapshot by id. |
| `clearAll` | `(): Promise<void>` | Remove all snapshots from storage. |

### Access the version history instance

After the Block Editor initializes, retrieve the version history instance and wait for 
snapshot data to load before calling any version history methods.

```typescript
const versionHistory = editor.value.getVersionHistory();
await versionHistory.whenReady();
```

### Methods

The following are the methods available in the `IVersionHistory`:

#### Create a snapshot

Creates a new snapshot of the current document state with an optional label and metadata.

```typescript
const snapshot = await versionHistory.createSnapshot({
    label: 'Before major update',
    modifiedBy: currentUserId
});
```

#### List snapshots

Retrieves all saved snapshots or a paginated subset. Snapshots are returned in chronological order.

```typescript
// Retrieve all snapshots
const snapshots = versionHistory.getSnapshots();

// Retrieve a paginated subset — getSnapshots(skip, take)
const snapshots = versionHistory.getSnapshots(20, 40);
```

#### Rename a snapshot

Updates the label or metadata of an existing snapshot without modifying its content.

```typescript
await versionHistory.renameSnapshot(snapshotId, 'Release Candidate');
```

#### Restore a snapshot

Reverts the document to a previously saved snapshot state. The current document state is automatically backed up before restoration.

```typescript
await versionHistory.restoreSnapshot(snapshotId);
```

> **Note:** When a snapshot is restored, the current document state is automatically 
> backed up before the restore operation is applied.

#### Compare versions

Compares two snapshots to identify differences such as added, removed, or modified content.

```typescript
const diff = versionHistory.compareVersions(snapshotIdA, snapshotIdB);
```

The returned `VersionDiff` object provides a summary of the differences between the two selected versions.

#### Export a snapshot

Serializes a snapshot into a portable format that can be stored externally or transferred between systems.

```typescript
const exported = await versionHistory.exportSnapshot(snapshotId);
```

Exported snapshots can be stored externally or transferred between systems.

#### Import a snapshot

Imports a previously exported snapshot back into the version history storage.

```typescript
const imported = await versionHistory.importSnapshot(exported);
```

## Snapshot Events

You can respond to version history events through the version history settings.

### Snapshot Created

Triggered when a new snapshot is created.

```vue
<template>
  <ejs-blockeditor :collaborationSettings="collaborationSettings"></ejs-blockeditor>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration, VersionHistory } from '@syncfusion/ej2-vue-blockeditor';
import { provide } from 'vue';

const collaborationSettings = {
  versionHistory: {
    storage: myStorage,
    snapshotCreated: ({ snapshot }) => {
      console.log(snapshot.id);
    }
  }
};
provide('blockeditor', [Collaboration, VersionHistory]);
</script>
```

### Snapshot Restored

Triggered when a snapshot is restored.

```vue
<template>
  <ejs-blockeditor :collaborationSettings="collaborationSettings"></ejs-blockeditor>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, Collaboration, VersionHistory } from '@syncfusion/ej2-vue-blockeditor';
import { provide } from 'vue';

const collaborationSettings = {
  versionHistory: {
    storage: myStorage,
    snapshotRestored: ({
      snapshot,
      backupSnapshot
    }) => {
      console.log(snapshot.label);
    }
  }
};
</script>
```

## Collaboration Settings

The following properties are available in `CollaborationSettingsModel`.

| Property          | Type                          | Description                                               |
| ----------------- | ----------------------------- | --------------------------------------------------------- |
| `adapter`         | `CollaborationAdapter`        | Provides the Yjs runtime and shared fragment.             |
| `provider`        | `any`                         | Real-time transport used to synchronize document changes. |
| `enableAwareness` | `boolean`                     | Enables user presence, remote cursors, and selections.    |
| `versionHistory`  | `VersionHistorySettingsModel` | Enables document version history support.                 |

## Best Practices

* **Use WebRTC or PartyKit for development** - These providers require no server setup and are ideal for local testing and prototyping before moving to a production provider.
* **Use WebSocket-based providers in production** - `y-websocket`, Hocuspocus, or a managed service like Liveblocks provides reliable, low-latency, persistent synchronization at scale.
* **Use stable room identifiers** - Use a unique document ID as the collaboration room name to prevent unintended document sharing between different documents.
* **Persist snapshots externally** - Store snapshots in a database or cloud storage to preserve version history across sessions.
* **Enable awareness selectively** - Disable `enableAwareness` when user presence information is not required to reduce network and processing overhead.

## Troubleshooting

### Changes Are Not Synchronizing

Verify the following:

* All users are connected to the same collaboration room.
* The provider connection is active.
* The shared Yjs document is correctly configured.

### Remote Cursors Are Not Visible

Verify the following:

* `enableAwareness` is set to `true`.
* The configured provider supports the Yjs awareness protocol.
* User information is set via the `users` and `currentUserId` properties.
* Each user has a unique `id` value.

### Remote User Names Are Not Appearing on Cursors

Verify the following:

* The `user` field is populated for all entries in the `users` array.

### Version History Is Not Available

Verify the following:

* The `VersionHistory` module is injected into the Block Editor.
* A valid `IVersionStorage` implementation is provided.
* `whenReady()` has been awaited before accessing snapshots.