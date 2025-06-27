import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" ref="blockEditor"></ejs-blockeditor>
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
`,

  data() {
    return {
      blocksData : [
          {
            id: 'title-block',
            type: 'Heading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Document Export Demo'
                }
            ]
        },
        {
            id: 'intro-paragraph',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
                }
            ]
        },
        {
            id: 'features-heading',
            type: 'Heading2',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Export Features'
                }
            ]
        },
        {
            id: 'features-list',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'JSON export for data processing'
                }
            ]
        },
        {
            id: 'features-list-2',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'HTML export for web display'
                }
            ]
        },
        {
            id: 'features-list-3',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Print functionality for hard copies'
                }
            ]
        },
        {
            id: 'code-example',
            type: 'Code',
            content: [
                {
                    type: ContentType.Text,
                    content: 'const data = editor.getDataAsJson();\nconsole.log(data);'
                }
            ]
        }
      ]     
    };
  },
  methods: {
    getJsonBlock: function() {
      const blockData = this.$refs.blockEditor.ej2Instances.getDataAsJson('block-1');
      const formattedJson = JSON.stringify(blockData, null, 2);
      this.displayOutput(`Block "block-1" as JSON:\n\n${formattedJson}`);
    },
    getJsonBlock: function() {
      const blockData = this.$refs.blockEditor.ej2Instances.getDataAsJson('block-1');
      const formattedJson = JSON.stringify(blockData, null, 2);
      this.displayOutput(`Block "block-1" as JSON:\n\n${formattedJson}`);
    },
    getHtmlAll: function() {
      const htmlData = this.$refs.blockEditor.ej2Instances.getDataAsHtml();
      this.displayOutput(`All blocks as HTML:\n\n${htmlData}`);
    },
    getHtmlBlock: function() {
      const blockHtml = this.$refs.blockEditor.ej2Instances.getDataAsHtml('block-2');
      this.displayOutput(`Block "block-2" as HTML:\n\n${blockHtml}`);
    },
    printContent: function() {
      this.$refs.blockEditor.ej2Instances.print();
      this.displayOutput('Print dialog opened. Check for a new browser window/tab with the printable content.');
    },
    displayOutput: function(message) {
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.textContent = message;
      }
    }
  }

});