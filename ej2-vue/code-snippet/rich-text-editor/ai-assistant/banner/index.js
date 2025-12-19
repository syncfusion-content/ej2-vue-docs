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
                bannerTemplate: `<div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>AI Assistant</h3>
            <i>AI-generated results can be error-prone; review them carefully.</i>
        </div>`
            }
        };
    },
    provide: {
        richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
});