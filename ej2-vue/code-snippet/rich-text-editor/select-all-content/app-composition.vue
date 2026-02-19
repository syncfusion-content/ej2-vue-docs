<template>
  <div>
    <button class="e-btn" style="margin-bottom: 20px" @click="selectAllContent">
      Select All
    </button>

    <ejs-richtexteditor ref="rteRef" :value="rteValue">
    </ejs-richtexteditor>
  </div>
</template>

<script>
import {
  RichTextEditorComponent as EjsRichtexteditor,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar
} from '@syncfusion/ej2-vue-richtexteditor';
import { ref } from 'vue';

const rteRef = ref();

const rteValue = `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
<p><b>Key features:</b></p>
<ul>
  <li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
  <li><p>Capable of handling markdown editing.</p></li>
  <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
  <li><p>Provides a fully customizable toolbar.</p></li>
  <li><p>Provides HTML view to edit the source directly for developers.</p></li>
  <li><p>Supports third-party library integration.</p></li>
  <li><p>Allows preview of modified content before saving it.</p></li>
  <li><p>Handles images, hyperlinks, video, uploads, etc.</p></li>
  <li><p>Contains undo/redo manager.</p></li>
  <li><p>Creates bulleted and numbered lists.</p></li>
</ul>`;

function selectAllContent() {
  rteRef.value?.ej2Instances?.selectAll();
}
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>