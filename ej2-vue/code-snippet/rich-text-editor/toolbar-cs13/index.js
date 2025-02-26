import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Resize, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<div class="control-section"><ejs-richtexteditor :value="rteValue" :enableResize="true"></ejs-richtexteditor></div>`,

    data: function () {
        return {
            rteValue: `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>`,
        }
    },
    provide:{
        richtexteditor:[Toolbar, Image, Resize,HtmlEditor, Link]
    }

});