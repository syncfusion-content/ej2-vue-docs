<template>
  <div id='container'>
    <ejs-blockeditor ref="blockEditor" :blocks="blocksData"></ejs-blockeditor>
    <div id="controls">
            <h3>Data Export Methods</h3>
            <div class="button-group">
                <button @click="getJsonAll">Get All as JSON</button>
                <button @click="getJsonBlock">Get Block as JSON</button>
                <button @click="getHtmlAll">Get All as HTML</button>
                <button @click="getHtmlBlock">Get Block as HTML</button>
                <button @click="printContent">Print Content</button>
            </div>
            <div id="output"></div>
        </div>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

let blockEditor=ref(null);

const blocksData = [
     {
        id: 'block-1',
        type: 'Heading1',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        id: 'block-2',
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        id: 'block-3',
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This is another paragraph block.'
            }
        ]
    }
];

const getJsonBlock=()=> {
      const blockData = blockEditor.getDataAsJson('block-1');
      const formattedJson = JSON.stringify(blockData, null, 2);
      displayOutput(`Block "block-1" as JSON:\n\n${formattedJson}`);
    };
const getJsonBlock=()=> {
      const blockData = blockEditor.getDataAsJson('block-1');
      const formattedJson = JSON.stringify(blockData, null, 2);
      displayOutput(`Block "block-1" as JSON:\n\n${formattedJson}`);
    };
const getHtmlAll=()=> {
      const htmlData = blockEditor.getDataAsHtml();
      displayOutput(`All blocks as HTML:\n\n${htmlData}`);
    };
 const getHtmlBlock=()=> {
      const blockHtml = blockEditor.getDataAsHtml('block-2');
      displayOutput(`Block "block-2" as HTML:\n\n${blockHtml}`);
    };
 const printContent=()=> {
      blockEditor.print();
      displayOutput('Print dialog opened. Check for a new browser window/tab with the printable content.');
    };
const displayOutput=(message)=> {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    };
}


</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css";
</style>
