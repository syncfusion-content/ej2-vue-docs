<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                <ejs-richtexteditor ref="rteObj" :height="340" :quickToolbarSettings="quickToolbarSettings" :value="rteValue" :toolbarSettings = "toolbarSettings" ></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Audio, Video, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

const toolbarSettings = {
    items: ['Audio']
};
const  quickToolbarSettings= {
    showOnRightClick: true,
    audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
},
const  rteValue= `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                    <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                    <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`,
provide('richtexteditor', [Toolbar, Link, Audio, HtmlEditor, QuickToolbar]);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';;
</style>