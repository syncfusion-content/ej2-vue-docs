<template>
  <div>
    <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder">
      <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user
        experience to create and update the content. Users can format their content using standard toolbar commands.</p>
      <p id="key"><b>Key features:</b></p>
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
      </ul>
    </ejs-richtexteditor>
    <button v-on:click="onClick" class="e-btn">Set Cursor Position</button>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, NodeSelection, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
const placeholder = "Type Something";
const onClick = function (event) {
  var instance = this.$refs.defaultRTE.$el.ej2_instances[0];
  let element = instance.contentModule.getDocument().getElementById("key");
  let selectioncursor = new NodeSelection();
  let range = document.createRange();
  range.setStart(element, 1); // to set the range
  selectioncursor.setRange(document, range); // to set the cursor
}
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
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