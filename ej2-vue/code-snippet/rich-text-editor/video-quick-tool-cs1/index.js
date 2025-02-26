import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Audio, Video, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

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
                items: ['Video']
            },
            quickToolbarSettings : {
                showOnRightClick: true,
                video: ['VideoReplace', 'VideoAlign', 'VideoRemove', 'VideoLayoutOption', 'VideoDimension']
            },
            rteValue: `<p><b>Get started with Quick Toolbar to click on a video</b></p>
                    <p>Using the quick toolbar, users can replace, align, display, dimension, and delete the selected video.</p>
                    <p><video controls>
                    <source controls style="width: 30%;"
                      src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Ocean-Waves.mp4"
                          type="video/mp4" />
                      </video></p>  `,
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Audio, Video, HtmlEditor, QuickToolbar]
    }
});