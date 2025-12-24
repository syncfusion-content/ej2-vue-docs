import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

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
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Document Export Demo'
            }
        ]
    },
    {
        id: 'intro-block',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
            }
        ]
    },
    {
        id: 'feature-heading',
        blockType: 'Heading',
        properties: { level: 2},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Export Features'
            }
        ]
    },
    {
        id: 'features-list',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'JSON export for data processing'
            }
        ]
    },
    {
        id: 'features-list-2',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'HTML export for web display'
            }
        ]
    },
    {
        id: 'features-list-3',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Print functionality for hard copies'
            }
        ]
    },
    {
        id: 'code-example',
        blockType: 'Code',
        content: [
            {
                contentType: ContentType.Text,
                content: 'const data = editor.getDataAsJson();\nconsole.log(data);'
            }
        ]
    }
]    
    };
  },
  methods: {
    getJsonAll: function() {
      const blockData = this.$refs.blockEditor.ej2Instances.getDataAsJson();
      const formattedJson = JSON.stringify(blockData, null, 2);
      this.displayOutput(`Block "block-1" as JSON:\n\n${formattedJson}`);
    },
    getJsonBlock: function() {
      const blockData = this.$refs.blockEditor.ej2Instances.getDataAsJson('intro-block');
      const formattedJson = JSON.stringify(blockData, null, 2);
      this.displayOutput(`Block "block-1" as JSON:\n\n${formattedJson}`);
    },
    getHtmlAll: function() {
      const htmlData = this.$refs.blockEditor.ej2Instances.getDataAsHtml();
      this.displayOutput(`All blocks as HTML:\n\n${htmlData}`);
    },
    getHtmlBlock: function() {
      const blockHtml = this.$refs.blockEditor.ej2Instances.getDataAsHtml('intro-block');
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