<template>
	<div id="container">
		<ejs-aiassistview id="aiAssistView" ref="aiassist" :mentions="mentions"
			prompt-placeholder="Type '@' for agents or '/' for commands..." :prompt-request="onPromptRequest">
		</ejs-aiassistview>
	</div>
</template>
<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';

export default {
	components: {
		'ejs-aiassistview': AIAssistViewComponent
	},
	data() {
		return {
			agents: [
				{
					id: 'TechSupport',
					name: 'TechSupport',
					description: 'Troubleshoot technical issues',
					placeholder: 'Ask about VPN, network, or device issues'
				},
				{
					id: 'HRAssistant',
					name: 'HRAssistant',
					description: 'Get assistance with HR policies',
					placeholder: 'Ask about leave, benefits, and HR policies'
				},
				{
					id: 'KnowledgeBase',
					name: 'KnowledgeBase',
					description: 'Search internal documentation',
					placeholder: 'Search the internal knowledge base'
				}
			],
			commands: [
				{
					id: 'table',
					name: '/table',
					description: 'Answer as a markdown table',
					placeholder: 'Format the response as a table'
				},
				{
					id: 'rewrite',
					name: '/rewrite',
					description: 'Rewrite content for clarity',
					placeholder: 'Improve clarity and professional tone'
				},
				{
					id: 'checklist',
					name: '/checklist',
					description: 'Create a step-by-step checklist',
					placeholder: 'Convert the response into a checklist'
				}
			],
			itemTemplate: '<div class="mention-item"><span class="mention-name">${name}</span><span class="mention-description">${description}</span></div>'
		};
	},
	computed: {
		mentions() {
			return [
				{
					mentionChar: '@',
					dataSource: this.agents,
					fields: {
						text: 'name',
						value: 'id'
					},
					itemTemplate: this.itemTemplate
				},
				{
					mentionChar: '/',
					dataSource: this.commands,
					fields: {
						text: 'name',
						value: 'id'
					},
					showMentionChar: false,
					itemTemplate: this.itemTemplate
				}
			];
		}
	},
	methods: {
		onPromptRequest() {
			setTimeout(() => {
				const defaultAiassist = this.$refs.aiassist.ej2Instances;
				const defaultResponse = 'The selected mention has been processed. Connect the AI AssistView to your preferred AI service for real-time responses.';
				defaultAiassist.addPromptResponse(defaultResponse);
			}, 1000);
		}
	}
};
</script>
<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css';

#container {
  height: 450px;
  width: 650px;
  margin: 20px auto;
}
</style>