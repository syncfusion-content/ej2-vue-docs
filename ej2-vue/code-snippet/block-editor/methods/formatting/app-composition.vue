<template>
  <div id='container'>
    <ejs-blockeditor ref="blockEditor" :blocks="blocksData"></ejs-blockeditor>
    <div id="controls">
        <h3>Formatting Methods</h3>
        <div class="button-group">
            <button @click="applyBold">Apply Bold</button>
            <button @click="applyColor">Apply Color</button>
            <button @click="enableToolbar">Enable Toolbar Items</button>
            <button @click="disableToolbar">Disable Toolbar Items</button>
        </div>
        <div class="instruction">
            <p><strong>Instructions:</strong> Select some text in the editor first, then click the formatting buttons to see the effects.</p>
        </div>
        <div id="output"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { BlockEditorComponent as EjsBlockeditor, ContentType } from "@syncfusion/ej2-vue-blockeditor";

let blockEditor=ref(null);

const blocksData = [
     {
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Formatting Demo'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
                }
            ]
        },
        {
            blockType: 'BulletList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'List item for formatting demonstration'
                }
            ]
        }
];

const applyBold=()=> {
  blockEditor.executeToolbarAction(BuiltInToolbar.Bold);
  displayOutput('Bold formatting applied to selected text');
};
const applyColor=()=> {
  blockEditor.executeToolbarAction(BuiltInToolbar.Color, '#ff6b35');
  displayOutput('Orange color (#ff6b35) applied to selected text');
};
const enableToolbar=()=> {
  blockEditor.enableToolbarItems(['bold', 'italic', 'underline']);
  displayOutput('Toolbar items (bold, italic, underline) have been enabled');
};
const displayOutput=(message)=> {
  var outputDiv = document.getElementById('output');
  if (outputDiv) {
      outputDiv.textContent = message;
  }
};

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css';
</style>
