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
                            <ejs-richtexteditor id="default" ref="rteInstance" :toolbarSettings="toolbarSettings" :aiAssistantSettings="aiAssistantSettings"></ejs-richtexteditor>
                        </div>
                    </div>
                </div>
            </div>`,

    data: function () {
        return {
            toolbarSettings: {
                items: ['AICommands', 'AIQuery']
            },
            aiAssistantSettings: {
                commands: [
                    { text: 'Rewrite', prompt: 'Rewrite the content to be more refined.' },
                    { text: 'Elaborate', prompt: 'Expand on the following content with more detail and explanation:' },
                    {
                        text: 'Change Tone',
                        items: [
                            { text: 'Professional', prompt: 'Rewrite the following content in a professional tone:' },
                            { text: 'Casual', prompt: 'Rewrite the following content in a casual, conversational tone:' },
                            { text: 'Direct', prompt: 'Rewrite the following content to be more direct and to the point:' },
                        ],
                    },
                ]
            }
        };
    },
    provide: {
        richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
});