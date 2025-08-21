import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :users="users" :labelSettings="labelSettings"></ejs-blockeditor>
  </div>
`,

  data () {
    return {
        users: [
            { id: 'user1', user: 'John Doe' }
        ],
        labelSettings: {
            labelItems: [
                { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' }
            ]
        },
      blocksData: [
        {
            type: 'Heading',
            props: { level: 2},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Different Content Types'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'The Block Editor supports various content types: '
                },
                {
                    type: ContentType.Link,
                    content: 'hyperlinks',
                    props: {
                        url: 'https://ej2.syncfusion.com/documentation/',
                        openInNewWindow: true
                    }
                },
                {
                    type: ContentType.Text,
                    content: ', inline '
                },
                {
                    type: ContentType.Code,
                    content: 'code snippets.'
                },
                {
                    type: ContentType.Text,
                    content: '\nUser mentions like '
                },
                {
                    type: ContentType.Mention,
                    id: 'user1'
                },
                {
                    type: ContentType.Text,
                    content: ', and labels such as '
                },
                {
                    type: ContentType.Label,
                    props: { labelId: 'label1'}
                },
                {
                    type: ContentType.Text,
                    content: '.'
                }
            ]
        }
      ]
    }
  },
  methods: {
    
  }

});