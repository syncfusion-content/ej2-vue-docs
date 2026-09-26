<template>
	<div id="container">
		<ejs-aiassistview id="aiAssistView" ref="aiassist" :mentions="mentions"
			prompt-placeholder="Type '@' to mention an agent..." :prompt-request="onPromptRequest">
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
			mentionData: [
				{ id: 'TechSupport', name: 'TechSupport' },
				{ id: 'HRAssistant', name: 'HRAssistant' },
				{ id: 'KnowledgeBase', name: 'KnowledgeBase' }
			],
			mentions: [
				{
					mentionChar: '@',
					fields: {
						text: 'name',
						value: 'id'
					}
				}
			]
		};
	},
	created() {
		this.mentions[0].dataSource = this.mentionData;
	},
	methods: {
		onPromptRequest() {
			setTimeout(() => {
				const defaultAiassist = this.$refs.aiassist.ej2Instances;
				const defaultResponse = 'The selected mention has been processed. Connect the AIAssistView to your preferred AI service for real-time responses.';
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