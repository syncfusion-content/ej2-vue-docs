import Vue from 'vue';
import { InlineAIAssistPlugin } from '@syncfusion/ej2-vue-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(InlineAIAssistPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
        <br />
        <div class="toolbar-row">
            <button id="summarizeBtn" @click="showPopup">Summarize</button>
            <div id="editableText" contenteditable="true">Select text and click Summarize</div>
        </div>

        <ejs-inlineaiassist id="defaultInlineAssist" popup-width="500px"
            :relate-to="'#summarizeBtn'"
            :prompt-request="onPromptRequest"
            :response-settings="responseSettings"
            :speech-to-text-settings="speechToTextSettings"
            ref="defaultInlineAssist">
        </ejs-inlineaiassist>
    </div>
`,
    data() {
        return {
            responseSettings: {
                itemSelect: this.onResponseItemSelect
            },
            speechToTextSettings: {
                enable: true,
                lang: 'en-US',
                allowInterimResults: true,
                buttonSettings: {
                    content: 'Start Recording',
                    stopContent: 'Stop Recording',
                    iconCss: 'e-icons e-microphone',
                    stopIconCss: 'e-icons e-microphone-off'
                }
            }
        };
    },
    methods: {
        onPromptRequest() {
            const self = this;
            setTimeout(function () {
                const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
                if (self.$refs.defaultInlineAssist && self.$refs.defaultInlineAssist.addResponse) {
                    self.$refs.defaultInlineAssist.addResponse(defaultResponse);
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
});