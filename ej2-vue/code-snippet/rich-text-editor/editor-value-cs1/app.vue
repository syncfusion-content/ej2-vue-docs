<template>
  <div>
    <ejs-richtexteditor
      ref="defaultRTE"
      :height="340"
      :value="value"
    ></ejs-richtexteditor>
    <button @click="getEditorValue">Get Editor Value</button>
    <div v-if="editorContent">
      <h3>Editor Content:</h3>
      <div v-html="editorContent"></div>
    </div>
  </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },

  data: function () {
    return {
      value: `Welcome to Syncfusion RichTextEditor!`,
      editorContent: '',
    };
  },
  methods: {
    getEditorValue() {
      this.editorContent = this.$refs.defaultRTE.ej2Instances.getHtml();
    },
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>