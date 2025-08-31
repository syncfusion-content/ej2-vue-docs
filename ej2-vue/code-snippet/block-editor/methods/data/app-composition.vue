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
        id: 'title-block',
        type: 'Heading',
        props: { level: 1},
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Document Export Demo'
            }
        ]
    },
    {
        id: 'intro-block',
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
            }
        ]
    },
    {
        id: 'feature-heading',
        type: 'Heading',
        props: { level: 2},
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Export Features'
            }
        ]
    },
    {
        id: 'features-list',
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'JSON export for data processing'
            }
        ]
    },
    {
        id: 'features-list-2',
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'HTML export for web display'
            }
        ]
    },
    {
        id: 'features-list-3',
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Print functionality for hard copies'
            }
        ]
    },
    {
        id: 'code-example',
        type: 'Code',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'const data = editor.getDataAsJson();\nconsole.log(data);'
            }
        ]
    }
];

const getJsonAll=()=> {
      const blockData = blockEditor.getDataAsJson();
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
