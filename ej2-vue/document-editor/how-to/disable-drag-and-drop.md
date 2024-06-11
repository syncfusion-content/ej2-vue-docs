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

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-documenteditorcontainer ref="doceditcontainer" :serviceUrl="hostUrl" :enableToolbar='true' height='600px'
    :documentEditorSettings="settings"></ejs-documenteditorcontainer>
</template>

<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer } from '@syncfusion/ej2-vue-documenteditor';

const hostUrl = 'https://services.syncfusion.com/vue/production/api/documenteditor/';
const settings = { allowDragAndDrop: false };
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-documenteditorcontainer ref="doceditcontainer" :serviceUrl="hostUrl" :enableToolbar='true' height='600px'
    :documentEditorSettings="settings"></ejs-documenteditorcontainer>
</template>

<script>
import { DocumentEditorContainerComponent } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data: function () {
    return {
      hostUrl: 'https://services.syncfusion.com/vue/production/api/documenteditor/',
      settings: { allowDragAndDrop: false }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}


>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documenteditorsettings/#allowDragAndDrop) property is `true`.

The following example illustrates to disable the drag and drop option in DocumentEditor.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-documenteditor ref="docedit" height='600px' :documentEditorSettings="settings"></ejs-documenteditor>
</template>

<script setup>
import { DocumentEditorComponent as EjsDocumenteditor } from "@syncfusion/ej2-vue-documenteditor";

const hostUrl = 'https://services.syncfusion.com/vue/production/api/documenteditor/';
const settings = { allowDragAndDrop: false };

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-documenteditor ref="docedit" height='600px' :documentEditorSettings="settings"></ejs-documenteditor>  
</template>

<script>
import { DocumentEditorComponent } from "@syncfusion/ej2-vue-documenteditor";

export default {
  components: {
    'ejs-documenteditor': DocumentEditorComponent
  },
  data: function() {
      return {
        hostUrl : 'https://services.syncfusion.com/vue/production/api/documenteditor/',
        settings : { allowDragAndDrop: false }
      }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documenteditorsettings/#allowDragAndDrop) property is `true`.