import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :pasteSettings="pasteSettings" :afterPaste="afterPaste"></ejs-blockeditor>
    <div id="controls">
        <h4>Test Content to Copy and Paste:</h4>
        <div class="test-content">
            <div id="sampleContent" contenteditable="true">
                <h2 style="color: red; font-weight: bold; font-size: 24px;">Formatted Heading</h2>
                <p style="background-color: yellow; font-style: italic;">
                    This is a <span style="font-weight: bold;">bold paragraph</span> with 
                    <span style="color: blue; font-style: italic;">italic text</span> and 
                    <span style="text-decoration: underline;">underlined content</span>.
                </p>
                <script> console.log('This script should be removed'); </script>
                <iframe src="about:blank" width="100" height="50"></iframe>
                <div style="border: 1px solid black; padding: 10px;">
                    <span style="font-weight: 600;">Heavy text</span> and 
                    <span style="color: green; font-size: 18px;">colored text</span>
                </div>
            </div>
        </div>
        <div id="output"></div>
    </div>
  </div>
`,

  data () {
    return {
      blocksData : [
          {
              id: 'demo-block',
              blockType: 'Paragraph'
          }
      ],
      pasteSettings: {
          allowedStyles: ['text-decoration'],
          deniedTags: ['script', 'iframe']
      },
      afterPaste: (args) => {
          this.displayOutput(`After Paste Event: Processed content length: ${args.content.length} characters`);
      }
    }
  },
  methods: {
    displayOutput :function(message) {
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.textContent = message;
      }
    }
  },
  mounted() {
    this.displayOutput(`Paste Cleanup Settings Active:
      - Allowed Styles: ['text-decoration']
      - Denied Tags: ['script', 'iframe']

      Copy content from the test area above and paste it into the editor to see the cleanup in action.`);
  }

});