---
layout: post
title: Customize font family drop down in Vue Document editor component | Syncfusion
description: Learn here all about Customize font family drop down in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Customize font family drop down 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize font family drop down in Vue Document editor component

Document editor provides an options to customize the font family drop down list values using [`fontfamilies`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel/#fontfamilies) in Document editor settings. Fonts which are added in fontFamilies of [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/#documenteditorsettings) will be displayed on font drop down list of text properties pane and font dialog.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the font families in Document editor container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings'
      height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide } from 'vue';

const serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
// Add required font families to list it in font drop down
const settings = { fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria'] }

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings'
      height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
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
      serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      // Add required font families to list it in font drop down
      settings: { fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria'] }
    };
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Output will be like below:

![Font](../images/font-family.png)