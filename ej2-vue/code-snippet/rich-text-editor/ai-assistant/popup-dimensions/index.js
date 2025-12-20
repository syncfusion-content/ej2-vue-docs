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
                popupMaxHeight: 500,
                popupWidth: 500
            }
        };
    },
    provide: {
        richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
});