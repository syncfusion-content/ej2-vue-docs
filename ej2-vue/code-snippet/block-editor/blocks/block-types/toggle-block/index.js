import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
`,

  data () {
    return {
      blocksData: [
        {
            type: 'ToggleHeading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Collapsible Section'
                }
            ],
            isExpanded: true,
            children: [
                {
                    type: 'Paragraph',
                    content: [
                        {
                            type: ContentType.Text,
                            content: 'This content is inside a toggle section and can be collapsed.'
                        }
                    ]
                }
            ]
        },
        {
            type: 'ToggleParagraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Toggle paragraph section'
                }
            ],
            isExpanded: false,
            children: [
                {
                    type: 'Paragraph',
                    content: [
                        {
                            type: ContentType.Text,
                            content: 'This content is initially hidden because isExpanded is set to false.'
                        }
                    ]
                }
            ]
        }
      ]
    }
  },
  methods: {
    
  }

});