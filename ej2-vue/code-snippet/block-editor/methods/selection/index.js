import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

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
        id: 'sample-heading',
        type: 'Heading1',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Formatting Demo'
            }
        ]
    },
    {
        id: 'sample-paragraph-1',
        type: 'Paragraph',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
            }
        ]
    },
    {
        id: 'sample-list',
        type: 'BulletList',
        content: [
            {
                type: ej.blockeditor.ContentType.Text,
                content: 'List item for formatting demonstration'
            }
        ]
    }
      ]     
    };
  },
  methods: {
    applyBold: function() {
      this.$refs.blockEditor.ej2Instances.executeToolbarAction(BuiltInToolbar.Bold);
      this.displayOutput('Bold formatting applied to selected text');
    },
    applyBold: function() {
      this.$refs.blockEditor.ej2Instances.executeToolbarAction(BuiltInToolbar.Bold);
      this.displayOutput('Bold formatting applied to selected text');
    },
    applyColor: function() {
      this.$refs.blockEditor.ej2Instances.executeToolbarAction(BuiltInToolbar.Color, '#ff6b35');
      this.displayOutput('Orange color (#ff6b35) applied to selected text');
    },
    enableToolbar: function() {
      this.$refs.blockEditor.ej2Instances.enableToolbarItems(['bold', 'italic', 'underline']);
      this.displayOutput('Toolbar items (bold, italic, underline) have been enabled');
    },
    displayOutput: function(message) {
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.textContent = message;
      }
    }
  }
});