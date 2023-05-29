

<template>
  <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder" :formatter="formatter" >
    <p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul>
      <li>
        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
      </li>
      <li>
        <p>Capable of handling markdown editing.</p>
      </li>
      <li>
        <p>Contains a modular library to load the necessary functionality on demand.</p>
      </li>
      <li>
        <p>Provides a fully customizable toolbar.</p>
      </li>
    </ul>
  </ejs-richtexteditor>
</template>

<script>
  import Vue from 'vue';
  import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, IHtmlFormatterModel, HTMLFormatter } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  export default {
    data() {
    var customHTMLModel = {
  keyConfig: {
'insert-link': 'ctrl+q', // confite the desired key
}
}
      return {
        placeholder: "Type Something",
        formatter: new HTMLFormatter(customHTMLModel), // to configure custom key
    }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>
    @import 'https://ej2.syncfusion.com/vue/documentation./node_modules/@syncfusion/ej2/material.css';
</style>



