import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, EmojiPicker } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `
            <div>
                <div class="control-section">
                    <div class="sample-container">
                        <div class="default-section">
                        <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings"></ejs-richtexteditor>
                        </div>
                    </div>
                </div>
            </div>`,

    data: function() {
        return {
            toolbarSettings: {
                items: ['Formats']
            },
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar, EmojiPicker]
    }

});