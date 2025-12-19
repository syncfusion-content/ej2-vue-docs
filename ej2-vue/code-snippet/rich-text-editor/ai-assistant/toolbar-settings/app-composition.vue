<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor id="default" ref="rteInstance" :toolbarSettings="toolbarSettings" :aiAssistantSettings="aiAssistantSettings"></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, AIAssistant } from "@syncfusion/ej2-vue-richtexteditor";
const rteInstance = ref(null);
const toolbarSettings = {
            items: ['AICommands', 'AIQuery']
        };
const aiAssistantSettings = {
        headerToolbarSettings: ['AIcommands', 'Clear', 'Close'],
        promptToolbarSettings: ['Edit'],
        responseToolbarSettings: ['Copy', '|', 'Insert'],
        prompts: [
			{ 
				prompt: 'What is Essential Studio ?',
				response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
			}
		]
    };
const richtexteditor = [Toolbar, Link, Image, HtmlEditor, AIAssistant];
provide('richtexteditor', richtexteditor);
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css"; 
</style>