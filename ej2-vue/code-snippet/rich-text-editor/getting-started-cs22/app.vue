<template>
  <ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarData" :valueTemplate="valueTemplate" editorMode="Markdown">
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