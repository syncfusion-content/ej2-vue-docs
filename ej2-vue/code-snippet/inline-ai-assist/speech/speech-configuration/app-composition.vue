<template>
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
        <br />
        <div class="toolbar-row">
            <button id="summarizeBtn" class="e-btn e-primary" @click="showPopup">Summarize</button>
            <div id="editableText" contenteditable="true">
            </div>
        </div>

        <ejs-inlineaiassist popup-width="500px"
            :relate-to="'#summarizeBtn'"
            :prompt-request="onPromptRequest"
            :response-settings="responseSettings"
            :speech-to-text-settings="speechToTextSettings"
            ref="inlineAiAssist">
        </ejs-inlineaiassist>
    </div>
</template>

<script setup>
import { InlineAIAssistComponent as EjsInlineaiassist } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import { ref, reactive, onMounted } from 'vue';

enableRipple(true);

const inlineAiAssist = ref(null);

const responseSettings = reactive({
    itemSelect: (args) => {
        const label = args && args.command && args.command.label ? args.command.label : '';
        if (label === 'Accept') {
            const editable = document.getElementById('editableText');
            if (editable && inlineAiAssist.value && inlineAiAssist.value.prompts) {
                const prompts = inlineAiAssist.value.prompts;
                const last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
                if (last && last.response) {
                    editable.innerHTML = '<p>' + last.response + '</p>';
                }
            }
            inlineAiAssist.value.hidePopup();
        } else if (label === 'Discard') {
            inlineAiAssist.value.hidePopup();
        }
    }
});

const speechToTextSettings = reactive({
    enable: true,
    lang: 'en-US',
    allowInterimResults: true,
    buttonSettings: {
        content: 'Start Recording',
        stopContent: 'Stop Recording',
        iconCss: 'e-icons e-microphone',
        stopIconCss: 'e-icons e-microphone-off'
    }
});

const onPromptRequest = () => {
    setTimeout(() => {
        const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        inlineAiAssist.value.addResponse(defaultResponse);
    }, 1000);
};

const showPopup = () => {
    if (inlineAiAssist.value && inlineAiAssist.value.showPopup) {
        inlineAiAssist.value.showPopup();
    }
};

onMounted(() => {
    if (inlineAiAssist.value && inlineAiAssist.value.showPopup) {
        inlineAiAssist.value.showPopup();
    }
});
</script>

<style>
@import '@syncfusion/ej2-tailwind3-theme/styles/inline-ai-assist/index.css';
@import '@syncfusion/ej2-tailwind3-theme/styles/speech-to-text/index.css';

#editableText {
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    overflow-y: auto;
    font-size: 16px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid;
}
</style>