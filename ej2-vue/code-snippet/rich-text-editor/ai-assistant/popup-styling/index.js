import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Audio, HtmlEditor, AIAssistant } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
    el: '#app',
    template: `
            <div>
                <div class="control-section">
                    <div class="sample-container">
                        <div class="default-section">
                        <ejs-richtexteditor
                            id="default"
                            ref="rteInstance"
                            :toolbarSettings="toolbarSettings"
                            @aiAssistantRequest="onPromptRequest">
                        </ejs-richtexteditor>
                        </div>
                    </div>
                </div>
            </div>`,

    data: function () {
        return {
            toolbarSettings: {
                items: ['AICommands', 'AIQuery']
            }
        };
    },
    methods: {
        onPromptRequest: function (event) {
            setTimeout(() => {
                const rteInstance = this.$refs.rteInstance.ej2Instances;
                rteInstance.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
                rteInstance.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
            }, 5000);
        }
    },
    provide: {
        richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
});