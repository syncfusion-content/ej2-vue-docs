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
@import '@syncfusion/ej2-tailwind3-theme/styles/ai-assistview/index.css';
@import '@syncfusion/ej2-tailwind3-theme/styles/drop-down-list/index.css';

#container {
  height: 450px;
  width: 650px;
  margin: 20px auto;
}

.e-assist-mention  .listItems {
    display: grid;
    grid-template-columns: 22px 1fr;
    grid-template-rows: auto auto;
    column-gap: 5px;
    row-gap: 0;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 6px;
    line-height: 1.2;
    min-height: 38px;
}

.e-assist-mention  .listItems .commandIcon {
    grid-row: 1 / span 2;
    grid-column: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'e-icons';
    font-size: 14px;
    width: 22px;
    height: 22px;
}

.e-assist-mention  .listItems .commandName {
    grid-row: 1;
    grid-column: 2;
    font-weight: 600;
    font-size: 13px;
    align-self: end;
}

.e-assist-mention  .listItems .commandDesc {
    grid-row: 2;
    grid-column: 2;
    font-size: 11px;
    color: var(--color-sf-text-muted, #6b6b6b);
    align-self: start;
    margin-top: 1px;
}

.e-assist-mention  .e-list-item .e-highlight {
    font-weight: 700;
    background: transparent;
    color: inherit;
}

</style>