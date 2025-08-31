import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" ref="blockEditor"></ejs-blockeditor>
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
`,

  data () {
    return {
      blocksData : [
              {
        id: 'block-1',
        type: 'Heading',
        props: { level: 1},
        content: [
            {
                type: ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        id: 'block-2',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    },
    {
        id: 'block-3',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is another paragraph block.'
            }
        ]
    }
      ],
    }
  },
  methods: {
    addBlock: function() {
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
      this.$refs.blockEditor.ej2Instances.addBlock(newBlock, 'block-2', true);
      this.displayOutput(`Block added successfully with ID: ${newBlock.id}`);
    },
    removeBlock: function() {
      this.$refs.blockEditor.ej2Instances.removeBlock('block-3');
      this.displayOutput('Block with ID "block-3" removed successfully');
    },
    getBlock: function() {
      const block = this.$refs.blockEditor.ej2Instances.getBlock('block-1');
      if (block && block.content) {
        this.displayOutput(`Block found:\nID: ${block.id}\nType: ${block.type}\nContent: ${block.content[0].content}`);
      } else {
        this.displayOutput('Block with ID "block-1" not found');
      }
    },
    moveBlock: function() {
      this.$refs.blockEditor.ej2Instances.moveBlock('block-2', 'block-1');
      this.displayOutput('Block "block-2" moved successfully');
    },
    updateBlock: function() {
      const success = this.$refs.blockEditor.ej2Instances.updateBlock('block-2', { indent: 1, content: [{ content: 'Updated content' }] });
      const updatedBlock = this.$refs.blockEditor.ej2Instances.getBlock('block-2');
      if (success && updatedBlock && updatedBlock.content) {
        this.displayOutput(`Block ${updatedBlock.id} updated successfully\nNew content: "${updatedBlock.content[0].content}" \nNew indent: ${updatedBlock.indent}`);
      } else {
        this.displayOutput('Failed to update block');
      }
    },
    getBlockCount: function() {
      const count = this.$refs.blockEditor.ej2Instances.getBlockCount();
      this.displayOutput(`Total number of blocks: ${count}`);
    },
    displayOutput: function(message) {
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.textContent = message;
      }
    }
  }

});