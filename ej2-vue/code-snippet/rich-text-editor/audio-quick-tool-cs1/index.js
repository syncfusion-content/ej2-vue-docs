import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Audio, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `
            <div>
                <div class="control-section">
                    <div class="sample-container">
                        <div class="default-section">
                            <ejs-richtexteditor ref="rteObj" :quickToolbarSettings="quickToolbarSettings" :height = "340" :value="rteValue" :toolbarSettings = "toolbarSettings" ></ejs-richtexteditor>
                        </div>
                    </div>
                </div>
            </div>`,

    data: function() {
        return {
            toolbarSettings: {
                items: ['Audio']
            },
            quickToolbarSettings : {
                showOnRightClick: true,
                audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
            },
            rteValue: `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                    <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                    <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`,
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Audio, HtmlEditor, QuickToolbar]
    }
});