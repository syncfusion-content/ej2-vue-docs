import Vue from 'vue';
import { InlineAIAssistPlugin } from '@syncfusion/ej2-vue-interactive-chat';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

Vue.use(InlineAIAssistPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
        <br>
        <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
            <button id="summarizeBtn" @click="showPopup">Summarize</button>
            <div id="editableText" contenteditable="true" style="flex:1; border:1px solid #ddd; padding:8px; min-height:40px;">Select text and click Summarize</div>
        </div>
        <ejs-inlineaiassist id="inlineAiAssist" popup-width="500px" :relate-to="'#summarizeBtn'" :prompt-request="onPromptRequest" :inline-toolbar-settings="inlineToolbarSettings" :response-settings="responseSettings" ref="inlineAiAssist"></ejs-inlineaiassist>
    </div>
`,
    data() {
        return {
            inlineToolbarSettings: {
                items: [
                    { type: 'Input', template: '<div id="ddMenu"></div>', align: 'Right' },
                ]
            },
            responseSettings: {
                itemSelect: function (args) {
                    var label = args && args.command && args.command.label ? args.command.label : '';
                    if (label === 'Accept') {
                        var editable = document.getElementById('editableText');
                        if (editable && this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.prompts) {
                            var prompts = this.$refs.inlineAiAssist.prompts;
                            var last = prompts && prompts.length ? prompts[prompts.length - 1] : null;
                            if (last && last.response) {
                                editable.innerHTML = '<p>' + last.response + '</p>';
                            }
                        }
                        this.$refs.inlineAiAssist.hidePopup();
                    } else if (label === 'Discard') {
                        this.$refs.inlineAiAssist.hidePopup();
                    }
                }
            }
        };
    },
    methods: {
        onPromptRequest() {
            var self = this;
            setTimeout(function () {
                var defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
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
    },
    mounted() {
        // instantiate dropdown inside the input template
        new DropDownButton({
            items: [
                { text: 'हिंदी' },
                { text: 'தமிழ்' },
                { text: 'తెలుగు' }
            ],
            content: 'English',
            iconCss: 'e-icons e-translate',
            cssClass: 'custom-dropdown'
        }, '#ddMenu');

        if (this.$refs.inlineAiAssist && this.$refs.inlineAiAssist.showPopup) {
            this.$refs.inlineAiAssist.showPopup();
        }
    }
});
