<template>
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
        <br />
        <div class="toolbar-row">
            <button id="summarizeBtn" class="e-btn e-primary" @click="showPopup">Summarize</button>
            <div id="editableText" contenteditable="true">Select text and click Summarize</div>
        </div>

        <ejs-inlineaiassist id="defaultInlineAssist"
            popup-width="500px"
            :relate-to="'#summarizeBtn'"
            :prompt-request="onPromptRequest"
            :response-settings="responseSettings"
            :speech-to-text-settings="speechToTextSettings"
            ref="defaultInlineAssist">
        </ejs-inlineaiassist>
    </div>
</template>

<script>
import { InlineAIAssistComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
    components: { 'ejs-inlineaiassist': InlineAIAssistComponent },
    data() {
        return {
            responseSettings: {
                itemSelect: this.onResponseItemSelect
            },
            speechToTextSettings: {
                enable: true,
                tooltipSettings: {
                    content: 'Click to start listening',
                    stopContent: 'Click to stop listening',
                    position: 'TopCenter'
                }
            }
        };
    },
    methods: {
        onPromptRequest() {
            setTimeout(() => {
                const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                if (this.$refs.defaultInlineAssist && this.$refs.defaultInlineAssist.addResponse) {
                    this.$refs.defaultInlineAssist.addResponse(defaultResponse);
                }
            }, 1000);
        },
        onResponseItemSelect(args) {
            const label = args && args.command && args.command.label ? args.command.label : '';
            if (label === 'Accept') {
                const editable = document.getElementById('editableText');
                if (editable && this.$refs.defaultInlineAssist && this.$refs.defaultInlineAssist.prompts) {
                    const prompts = this.$refs.defaultInlineAssist.prompts;
                    const last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
                    if (last && last.response) {
                        editable.innerHTML = '<p>' + last.response + '</p>';
                    }
                }
                this.$refs.defaultInlineAssist.hidePopup();
            } else if (label === 'Discard') {
                this.$refs.defaultInlineAssist.hidePopup();
            }
        },
        showPopup() {
            if (this.$refs.defaultInlineAssist && this.$refs.defaultInlineAssist.showPopup) {
                this.$refs.defaultInlineAssist.showPopup();
            }
        }
    },
    mounted() {
        if (this.$refs.defaultInlineAssist && this.$refs.defaultInlineAssist.showPopup) {
            this.$refs.defaultInlineAssist.showPopup();
        }
    }
};
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
