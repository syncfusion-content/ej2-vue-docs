<template>
  <div id='container'>
    <ejs-blockeditor ref="blockEditor" :blocks="blocksData"></ejs-blockeditor>
    <div id="controls">
            <h3>Block Management Methods</h3>
            <div class="button-group">
                <button @click="addBlock">Add Block</button>
                <button @click="removeBlock">Remove Block</button>
                <button @click="getBlock">Get Block</button>
                <button @click="moveBlock">Move Block</button>
                <button @click="updateBlock">Update Block</button>
                <button @click="getBlockCount">Get Block Count</button>
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

const addBlock= () => {
      const newBlock = {
        id: 'new-block',
        type: 'Paragraph',
        content: [
          {
            type: ContentType.Text,
            content: 'This is a newly added block'
          }
        ]
      };
      blockEditor.addBlock(newBlock, 'block-2', true);
      displayOutput(`Block added successfully with ID: ${newBlock.id}`);
    },
const removeBlock = () => {
      blockEditor.removeBlock('block-3');
      displayOutput('Block with ID "block-3" removed successfully');
    },
const getBlock = () => {
      const block = blockEditor.getBlock('block-1');
      if (block && block.content) {
        displayOutput(`Block found:\nID: ${block.id}\nType: ${block.type}\nContent: ${block.content[0].content}`);
      } else {
        displayOutput('Block with ID "block-1" not found');
      }
    },
 const moveBlock= () => {
      blockEditor.moveBlock('block-2', 'block-1');
      displayOutput('Block "block-2" moved successfully');
    },
 const updateBlock= () => {
      const success = blockEditor.updateBlock('block-2', { indent: 1, content: [{ content: 'Updated content' }] });
      const updatedBlock = blockEditor.getBlock('block-2');
      if (success && updatedBlock && updatedBlock.content) {
        displayOutput(`Block ${updatedBlock.id} updated successfully\nNew content: "${updatedBlock.content[0].content}" \nNew indent: ${updatedBlock.indent}`);
      } else {
        displayOutput('Failed to update block');
      }
    },
const getBlockCount= () => {
      const count = blockEditor.getBlockCount();
      displayOutput(`Total number of blocks: ${count}`);
    },

const displayOutput= (message) => {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = message;
    }
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
