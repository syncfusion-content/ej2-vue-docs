import Vue from 'vue';
import { BlockEditorPlugin, ContentType, CommandName } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" ref="blockEditor"></ejs-blockeditor>
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
`,

  data() {
    return {
      blocksData : [
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
      ]     
    };
  },
  methods: {
    applyBold: function() {
      this.$refs.blockEditor.ej2Instances.executeToolbarAction(CommandName.Bold);
      this.displayOutput('Bold formatting applied to selected text');
    },
    applyColor: function() {
      this.$refs.blockEditor.ej2Instances.executeToolbarAction(CommandName.Color, '#ff6b35');
      this.displayOutput('Orange color (#ff6b35) applied to selected text');
    },
    enableToolbar: function() {
      this.$refs.blockEditor.ej2Instances.enableToolbarItems(['bold', 'italic', 'underline']);
      this.displayOutput('Toolbar items (bold, italic, underline) have been enabled');
    },
    disableToolbar: function(){
      this.$refs.blockEditor.ej2Instances.disableToolbarItems(['bold', 'italic']);
      this.displayOutput('Toolbar items (bold, italic) have been disabled');
    },
    displayOutput: function(message) {
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.textContent = message;
      }
    }
  }
});