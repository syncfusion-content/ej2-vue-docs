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

<script>
import { RichTextEditorComponent, Toolbar, Link, Audio, Video, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent
    },
     data: function() {
        return {
            rteValue: `<p><b>Get started with Quick Toolbar to click on a video</b></p>
                    <p>Using the quick toolbar, users can replace, align, display, dimension, and delete the selected video.</p>
                    <p><video controls>
                    <source controls style="width: 30%;"
                      src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Ocean-Waves.mp4"
                          type="video/mp4" />
                      </video></p> `,
            toolbarSettings: {
                items: ['Video']
            },
            quickToolbarSettings: {
                showOnRightClick: true,
                video: ['VideoReplace', 'VideoAlign', 'VideoRemove', 'VideoLayoutOption', 'VideoDimension']
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Audio, Video, HtmlEditor, QuickToolbar]
    }
}
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
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
</style>