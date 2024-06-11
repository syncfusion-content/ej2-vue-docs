---
layout: post
title: Hide tool bar and properties pane in Vue Document editor component | Syncfusion
description: Learn here all about Hide tool bar and properties pane in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Hide tool bar and properties pane 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hide tool bar and properties pane in Vue Document editor component

**Document editor container** provides the main document view area along with the built-in toolbar and properties pane.

**Document editor** provides just the main document view area. Here, the user can compose, view, and edit the Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, Document editor container has built-in properties pane which contains options for formatting text, table, image and header and footer. You can use [`showPropertiesPane`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel/#showpropertiespane) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel/) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" :showPropertiesPane='false'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide } from 'vue';

const serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="true" :showPropertiesPane='false'></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl:
        'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

>Note: Positioning and customizing the properties pane in Document editor container is not possible. Instead, you can hide the exiting properties pane and create your own pane using public API's.

## Hide the toolbar

You can use [`enableToolbar`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel/#enabletoolbar) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/documentEditorContainerModel/) to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="false"></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide } from 'vue';

const serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" :serviceUrl="serviceUrl" height="590px" id="container"
      :enableToolbar="false"></ejs-documenteditorcontainer>
  </div>
</template>
<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return {
      serviceUrl:
        'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  }
};
</script>

{% endhighlight %}
{% endtabs %}

## See Also

* [How to customize the toolbar](../../document-editor/how-to/customize-tool-bar)