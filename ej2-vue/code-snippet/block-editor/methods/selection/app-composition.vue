<template>
  <div id='container'>
    <ejs-blockeditor ref="blockEditor" :blocks="blocksData"></ejs-blockeditor>
    <div id="controls">
            <h3>Selection and Cursor Methods</h3>
            <div class="button-group">
                <button @click="setSelection">Set Selection</button>
                <button @click="setCursorPosition">Set Cursor Position</button>
                <button @click="getSelectedBlocks">Get Selected Blocks</button>
                <button @click="getRange">Get Selection Range</button>
                <button @click="selectRange">Set Selection Range</button>
                <button @click="selectBlock">Select Block</button>
                <button @click="selectAllBlocks">Select All Blocks</button>
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
        id: 'heading-block',
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Welcome to Block Editor'
            }
        ]
    },
    {
        id: 'paragraph-1',
        blockType: 'Paragraph',
        content: [
            {
                id: 'paragraph1-content',
                contentType: ContentType.Text,
                content: 'This is the first paragraph with some sample text content for selection demonstration.'
            }
        ]
    },
    {
        id: 'paragraph-2',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is the second paragraph that can be used for various selection operations.'
            }
        ]
    },
    {
        id: 'list-block',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'First list item'
            }
        ]
    }
];

  const setSelection=() => {
      this.$refs.blockEditor.ej2Instances.setSelection('paragraph1-content', 5, 15);
      this.displayOutput('Text selection set in "paragraph-1" block from position 5 to 15');
    },
    const setCursorPosition=() => {
      this.$refs.blockEditor.ej2Instances.setCursorPosition('block-1', 10);
      this.displayOutput('Cursor position set at position 10 in "block-1"');
    },
    const getSelectedBlocks=() => {
      const selectedBlocks = this.$refs.blockEditor.ej2Instances.getSelectedBlocks();
      if (selectedBlocks && selectedBlocks.length > 0) {
        const blockInfo = selectedBlocks.map(block => `ID: ${block.id}, Type: ${block.blockType}`).join('\n');
        this.displayOutput(`Selected blocks (${selectedBlocks.length}):\n${blockInfo}`);
      } else {
        this.displayOutput('No blocks are currently selected');
      }
    },
    const getRange=() => {
      const range = this.$refs.blockEditor.ej2Instances.getRange();
      if (range) {
        const parent = range.startContainer.nodeType === 3 ? range.startContainer.parentElement : range.startContainer;
        this.displayOutput(`Current selection range: blockId: ${parent.closest('.e-block').id} Start Container: ${range.startContainer.nodeName} Start Offset: ${range.startOffset} End Container: ${range.endContainer.nodeName} End Offset: ${range.endOffset} Collapsed: ${range.collapsed}`);
      } else {
        this.displayOutput('No selection range found');
      }
    },
    const selectRange=() => {
      const paragraphElement = document.getElementById('paragraph-2');
      if (paragraphElement) {
        const range = document.createRange();
        const textNode = paragraphElement.querySelector('.e-block-content').firstChild;
        if (textNode) {
          range.setStart(textNode, 8);
          range.setEnd(textNode, 20);
          this.$refs.blockEditor.ej2Instances.selectRange(range);
          this.displayOutput('Custom selection range applied to "paragraph-2" (positions 8-20)');
        } else {
          this.displayOutput('Could not find text content in paragraph-2');
        }
      }
    },
    const selectBlock=() => {
      this.$refs.blockEditor.ej2Instances.selectBlock('block-1');
      this.displayOutput('Entire "block-1" selected');
    },
    const selectAllBlocks=() => {
      this.$refs.blockEditor.ej2Instances.selectAllBlocks();
      this.displayOutput('All blocks in the editor have been selected');
    };
    const displayOutput=(message) => {
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.textContent = message;
      }
    }

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
