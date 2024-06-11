<template>
  <ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarData" :valueTemplate="valueTemplate" editorMode="Markdown">
    <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul>
      <li>
        <p>Provides IFRAME and DIV modes</p>
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
      <li>
        <p>Provides HTML view to edit the source directly for developers.</p>
      </li>
      <li>
        <p>Supports third-party library integration.</p>
      </li>
      <li>
        <p>Allows preview of modified content before saving it.</p>
      </li>
      <li>
        <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
      </li>
    </ul>
  </ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';
export default {
name: "App",
components: {
"ejs-richtexteditor":RichTextEditorComponent
},
    data() {
      return {
        toolbarData: {
          items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|','Undo', 'Redo']
        },
        valueTemplate: `The sample is added to showcase **markdown editing**.

  Type or edit the content and apply formatting to view markdown formatted content.

  We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

  The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`
      }
    },
    mounted() {
      document.addEventListener('keyup', this.onKeyUp);
    },
    methods: {
      onKeyUp (e) {
        if (e.altKey && e.keyCode === 84) { /* t */
          // press alt+t to focus the component.
          this.$refs.defaultRTE.ej2Instances.focusIn();
        }
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, MarkdownEditor]
    }
  }
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>