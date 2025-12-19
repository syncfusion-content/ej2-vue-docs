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
                    <ejs-richtexteditor id="default" ref="rteInstance" :toolbarSettings="toolbarSettings" :aiAssistantSettings="aiAssistantSettings"></ejs-richtexteditor><br/>
                    <button class="e-btn e-primary" @click="onSaveBtnClick()"><span class="e-icons e-save"></span>Save</button>
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
                prompts: [
                    {
                        prompt: 'What is Essential Studio ?',
                        response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
                    }
                ],
                maxPromptHistory: 30
            }
        };
    },
    methods: {
        onSaveBtnClick: function () {
            const promptHistory = this.$refs.rteInstance.ej2Instances.getAIPromptHistory();
            console.log(promptHistory);
            // Handle DB Post and save history to the DB.
        }
    },
    provide: {
        richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
});