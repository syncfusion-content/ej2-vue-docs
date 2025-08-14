import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :labelSettings="labelSettings"></ejs-blockeditor>
  </div>
`,

  data() {
    return {
      blocksData: [
        {
            type: 'Heading',
            props: { level:1},
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Project Planning with Custom Labels'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Type # to add status labels to your tasks.'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Fix homepage layout issue - '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    props: { labelId: 'bug' }
                },
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: ' '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    props: { labelId: 'high' }
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Update user documentation - '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    props: { labelId: 'task' }
                },
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: ' '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    props: { labelId: 'medium' }
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Implement payment gateway - '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    props: { labelId: 'feature' }
                },
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: ' '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    props: { labelId: 'critical' }
                }
            ]
        }
      ],
    labelSettings : {
        triggerChar: '#',
        labelItems: [
            { id: 'bug', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' },
            { id: 'task', text: 'Task', labelColor: '#90caf9', groupHeader: 'Status' },
            { id: 'feature', text: 'Feature', labelColor: '#81c784', groupHeader: 'Status' },
            { id: 'enhancement', text: 'Enhancement', labelColor: '#ba68c8', groupHeader: 'Status' },
            
            { id: 'low', text: 'Low Priority', labelColor: '#c5e1a5', groupHeader: 'Priority' },
            { id: 'medium', text: 'Medium Priority', labelColor: '#fff59d', groupHeader: 'Priority' },
            { id: 'high', text: 'High Priority', labelColor: '#ffab91', groupHeader: 'Priority' },
            { id: 'critical', text: 'Critical', labelColor: '#ef9a9a', groupHeader: 'Priority' }
        ]
    }
    };
  },
  methods: {
    
  }

});