import Vue from 'vue';
import { InlineAIAssistPlugin } from "@syncfusion/ej2-vue-interactive-chat";
import { enableRipple } from '@syncfusion/ej2-base';

Vue.use(InlineAIAssistPlugin);

enableRipple(true);

new Vue({
    el: '#app',
    template: `
    <div id='container' style="height: 350px; width: 650px; margin: 0 auto;">
        <br>
        <button id="summarizeBtn" @click="showPopup">Open Inline AI Assist</button>
        <div id="editableText" contenteditable="true" style="min-height:80px;border:1px solid #ccc;padding:8px;margin-top:8px;">Editable content goes here.</div>
        <ejs-inlineaiassist id='inlineAiAssist' prompt="What are the benifits of Inline AI Assist ?" relate-to="#summarizeBtn" popup-width="500px" :prompt-request="onPromptRequest" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
    </div>
`,
    data() {
        return {
            responseSettings: {
                itemSelect: (args) => {
                    if (args.command.label === 'Accept') {
                        const editable = document.getElementById('editableText');
                        if (editable && this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.prompts) {
                            editable.innerHTML = '<p>' + this.$refs.inlineAiAssist.prompts[this.$refs.inlineAiAssist.prompts.length - 1].response + '</p>';
                        }
                        if (this.$refs.inlineAiAssist) this.$refs.inlineAiAssist.hidePopup();
                    } else if (args.command.label === 'Discard') {
                        if (this.$refs.inlineAiAssist) this.$refs.inlineAiAssist.hidePopup();
                    }
                }
            }
        };
    },
    methods: {
        onPromptRequest(/* args */) {
            var self = this;
            setTimeout(function () {
                var defaultResponse = "For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
                if (self.$refs.inlineAiAssist && self.$refs.inlineAiAssist.addResponse) {
                    self.$refs.inlineAiAssist.addResponse(defaultResponse);
                }
            }, 1000);
        },
        showPopup() {
            if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) {
                this.$refs.inlineAiAssist.showPopup();
            }
        }
    }
});
