<template>
	<div id="container">
		<ejs-aiassistview id="aiAssistView" ref="aiassist" :mentions="mentions" :mention-select="onMentionSelect"
			:prompt-placeholder="promptPlaceholder" :prompt-request="onPromptRequest">
		</ejs-aiassistview>
		<div id="mention-status" class="mention-status"></div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { AIAssistViewComponent as EjsAiassistview } from '@syncfusion/ej2-vue-interactive-chat';

const aiassist = ref(null);
const promptPlaceholder = "Type '@' to mention an agent...";
const mentions = [
	{
		mentionChar: '@',
		dataSource: [
			{ id: 'TechSupport', name: 'TechSupport' },
			{ id: 'HRAssistant', name: 'HRAssistant' },
			{ id: 'KnowledgeBase', name: 'KnowledgeBase' }
		],
		fields: {
			text: 'name',
			value: 'id'
		}
	}
];

const onMentionSelect = (args) => {
	const statusEl = document.getElementById('mention-status');
	if (statusEl && args && args.itemData) {
		statusEl.textContent = 'Selected mention: ' + (args.itemData.name || args.itemData.id);
		statusEl.style.display = 'block';
	}
};

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