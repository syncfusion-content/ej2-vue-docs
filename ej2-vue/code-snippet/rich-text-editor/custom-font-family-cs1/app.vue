<template>
  <ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarSettings" :fontFamily="fontFamily"></ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  data() {
    return {
      toolbarSettings: {
        items: ['FontName']
      },
      fontFamily: {
        default: 'Segoe UI',
        width: '60px',
        items: [
          { text: 'Segoe UI', value: 'Segoe UI' },
          { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
          { text: 'Courier New', value: 'Courier New,Courier,monospace' },
          { text: 'Georgia', value: 'Georgia,serif' },
          { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
          { text: 'Calibri Light', value: 'CalibriLight' }
        ]
      },
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
}
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>