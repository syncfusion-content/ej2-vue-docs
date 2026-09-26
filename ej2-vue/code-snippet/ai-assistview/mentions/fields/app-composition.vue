<template>
	<div id="container">
		<ejs-aiassistview id="aiAssistView" ref="aiassist" :mentions="mentions"
			prompt-placeholder="Type '@' to mention an agent..." :prompt-request="onPromptRequest">
		</ejs-aiassistview>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';

const aiassist = ref(null);
const mentionData = [
	{ id: 'TechSupport', name: 'TechSupport' },
	{ id: 'HRAssistant', name: 'HRAssistant' },
	{ id: 'KnowledgeBase', name: 'KnowledgeBase' }
];
const mentions = [
	{
		mentionChar: '@',
		dataSource: mentionData,
		fields: {
			text: 'name',
			value: 'id'
		}
	}
];

const onPromptRequest = () => {
	setTimeout(() => {
		const defaultResponse = 'The selected mention has been processed. Connect the AIAssistView to your preferred AI service for real-time responses.';
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