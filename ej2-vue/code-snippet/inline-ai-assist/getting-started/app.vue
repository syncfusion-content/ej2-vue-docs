<template>
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
        <br />
        <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
            <button id="summarizeBtn" @click="showPopup">Summarize</button>
            <div id="editableText" contenteditable="true" style="flex:1; border:1px solid #ddd; padding:8px; min-height:40px;">Select text and click Summarize</div>
        </div>

        <ejs-inlineaiassist id="defaultInlineAssist"
            popup-width="500px"
            :relate-to="'#summarizeBtn'"
            :prompt-request="onPromptRequest"
            :response-settings="responseSettings"
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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
</style>