<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings">
            <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best
              user experience to create and update the content. Users can format their content using standard toolbar
              commands.</p>
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
            </ul>
          </ejs-richtexteditor>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
.e-richtexteditor .e-rte-content .e-content pre {
  padding: 10px;
  background: #F4F5F7;
}
</style>
<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
const toolbarSettings = {
  items: ['InsertCode']
};
provide('richtexteditor', [Toolbar, HtmlEditor]);
</script>

<style>@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";</style>