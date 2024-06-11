---
layout: post
title: Deploy document editor component for mobile in Vue Document editor component | Syncfusion
description: Learn here all about Deploy document editor component for mobile in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Deploy document editor component for mobile 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Deploy document editor component for mobile in Vue Document editor component

## Document editor component for Mobile

At present, Document editor component is not responsive for mobile, and we haven't ensured the editing functionalities in mobile browsers. Whereas it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document editor component as read-only in mobile browsers. Also, invoke [`fitPage`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#fitpage) method with [`FitPageWidth`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/pageFitType/) parameter in document change event, such as to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy Document Editor component for Mobile.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" height="590px" :serviceUrl='serviceUrl' :enableToolbar='true'
      :documentChange='onDocumentChange'> </ejs-documenteditorcontainer>
  </div>
</template>

<script setup>
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, Toolbar } from '@syncfusion/ej2-vue-documenteditor';
import { provide, ref } from 'vue';

const container = ref(null);
const serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

//Inject require modules.
provide('DocumentEditorContainer', [Toolbar])

const onDocumentChange = function (args) {
  //To detect the device
  let isMobileDevice = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

  if (isMobileDevice) {
    container.value.ej2Instances.restrictEditing = true;
    setTimeout(() => {
      container.value.ej2Instances.documentEditor.fitPage("FitPageWidth");
    }, 50);
  }
  else {
    container.value.ej2Instances.restrictEditing = false;
  }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-documenteditorcontainer ref="container" height="590px" :serviceUrl='serviceUrl' :enableToolbar='true'
      :documentChange='onDocumentChange'> </ejs-documenteditorcontainer>
  </div>
</template>

<script>
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent
  },
  data() {
    return { serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar]
  },
  methods: {
    onDocumentChange: function (args) {
      //To detect the device
      let isMobileDevice = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

      if (isMobileDevice) {
        this.$refs.container.ej2Instances.restrictEditing = true;
        setTimeout(() => {
          this.$refs.container.ej2Instances.documentEditor.fitPage("FitPageWidth");
        }, 50);
      }
      else {
        this.$refs.container.ej2Instances.restrictEditing = false;
      }
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/)

>Note: You can use the [`restrictEditing`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#isreadonly) in DocumentEditor based on your requirement to change component to read only mode.