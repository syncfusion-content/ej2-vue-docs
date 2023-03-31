---
layout: post
title: Disable drag and drop in document editor in Vue Document editor component | Syncfusion
description: Learn here all about Disable drag and drop in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Disable drag and drop in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable drag and drop in document editor in vue Document editor component

Document Editor provides support to drag and drop contents within the component and it can be customized(enable and disable) using [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documenteditorsettings/#allowDragAndDrop)  property in Document editor settings.

The following example illustrates to customize the drag and drop option.

```typescript
<template>
    <ejs-documenteditorcontainer ref="doceditcontainer" :serviceUrl="hostUrl" :enableToolbar='true' height='600px' :documentEditorSettings="settings"></ejs-documenteditorcontainer>  
</template>

<script>
export default Vue.extend({
    data: function() {
        return {
          hostUrl : 'https://services.syncfusion.com/vue/production/api/documenteditor/',
          settings : { allowDragAndDrop: false };
        }
    }
})
</script>
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documenteditorsettings/#allowDragAndDrop) property is `true`.

The following example illustrates to disable the drag and drop option in DocumentEditor.

```typescript
<template>
    <ejs-documenteditor ref="docedit" height='600px' :documentEditorSettings="settings"></ejs-documenteditor>  
</template>

<script>
export default Vue.extend({
    data: function() {
        return {
          hostUrl : 'https://services.syncfusion.com/vue/production/api/documenteditor/',
          settings : { allowDragAndDrop: false };
        }
    }
})
</script>
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documenteditorsettings/#allowDragAndDrop) property is `true`.