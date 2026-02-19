<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor id="default" ref="rteInstance" :toolbarSettings="toolbarSettings" :aiAssistantSettings="aiAssistantSettings"></ejs-richtexteditor><br/>
                    <button class="e-btn e-primary" @click="onSaveBtnClick()"><span class="e-icons e-save"></span>Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { RichTextEditorComponent, Toolbar, Link, Audio, HtmlEditor, AIAssistant  } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent
    },
     data: function() {
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
        onSaveBtnClick: function() {
        const promptHistory = this.$refs.rteInstance.ej2Instances.getAIPromptHistory();
        console.log(promptHistory);
        // Handle DB Post and save history to the DB.
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
    @import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css"; 
</style>