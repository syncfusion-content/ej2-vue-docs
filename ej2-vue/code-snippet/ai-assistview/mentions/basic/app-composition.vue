<template>
	<div id="container">
		<ejs-aiassistview id="aiAssistView" ref="aiassist" :mentions="mentions"
			prompt-placeholder="Type '@' for agents or '/' for commands..." :prompt-request="onPromptRequest">
		</ejs-aiassistview>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';

const aiassist = ref(null);
const agents = [
	{
		id: 'TechSupport',
		name: 'TechSupport',
		placeholder: 'Ask about VPN, network, or device issues',
		iconCss: 'e-icons e-comment-status'
	},
	{
		id: 'HRAssistant',
		name: 'HRAssistant',
		placeholder: 'Ask about leave, benefits, and HR policies',
		iconCss: 'e-icons e-people'
	},
	{
		id: 'KnowledgeBase',
		name: 'KnowledgeBase',
		placeholder: 'Search the internal knowledge base',
		iconCss: 'e-icons e-objects'
	}
];

const commands = [
	{
		id: 'table',
		name: '/table',
		description: 'Answer as a markdown table',
		placeholder: 'Format the response as a table',
		iconCss: 'e-icons e-table'
	},
	{
		id: 'rewrite',
		name: '/rewrite',
		description: 'Rewrite content for clarity and professionalism',
		placeholder: 'Improve clarity and professional tone',
		iconCss: 'e-icons e-rename'
	},
	{
		id: 'checklist',
		name: '/checklist',
		description: 'Convert a process into a step-by-step checklist',
		placeholder: 'Convert the response into a checklist',
		iconCss: 'e-icons e-list-unordered'
	}
];

const mentions = [
	{
		mentionChar: '@',
		dataSource: agents,
		fields: {
			text: 'name',
			value: 'id',
			iconCss: 'iconCss'
		}
	},
	{
		mentionChar: '/',
		dataSource: commands,
		showMentionChar: false,
		fields: {
			text: 'name',
			value: 'id',
			iconCss: 'iconCss'
		},
		itemTemplate: '<div class="listItems"><span class="commandIcon ${iconCss}"></span><span class="commandName">${name}</span><span class="commandDesc">${description}</span></div>'
	}
];

const onPromptRequest = () => {
	setTimeout(() => {
		const defaultResponse = 'The selected mention has been processed. Connect the AI AssistView to your preferred AI service for real-time responses.';
		aiassist.value.addPromptResponse(defaultResponse);
	}, 1000);
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