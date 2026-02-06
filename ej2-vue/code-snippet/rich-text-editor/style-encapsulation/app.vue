<template>
  <div class="control-section">
    <div class="editor">
      <h6 class="header">With style encapsulation</h6>
      <ejs-richtexteditor
        ref="rteObj"
        :value="rteValue"
        :iframeSettings="iframeSettings"
      >
      </ejs-richtexteditor>
    </div>
    <div class="editor">
      <h6 class="header">With style encapsulation</h6>
      <ejs-richtexteditor ref="rteObj" :value="rteValue"> </ejs-richtexteditor>
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

  data() {
    return {
        rteValue: `<p>The Syncfusion <strong>Rich Text Editor</strong>, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
            <li>
               <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
            </li>
            <li>
               <p>Bulleted and numbered lists.</p>
            </li>
            <li>
               <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
            </li>
            <li>
               <p>Contains undo/redo manager. </p>
            </li>
         </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"></div> `,
        iframeSettings: {
          enable: true,
        },
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
}
</script>

<style>
.control-section {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

p {
  color: blue;
}

p strong {
  font-size: 120%;
  background-color: yellow;
}

li p {
  background-color: blue;
  color: white;
}

#richTextEditor {
  margin-left: 10px;
}

.header {
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: #f8f9fa;
  color: #333;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  margin-right: 10px;
}
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>