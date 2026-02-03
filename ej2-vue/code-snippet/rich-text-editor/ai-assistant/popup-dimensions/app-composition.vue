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
        popupMaxHeight: 500,
        popupWidth: 500
    };
const richtexteditor = [Toolbar, Link, Image, HtmlEditor, AIAssistant];
provide('richtexteditor', richtexteditor);
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