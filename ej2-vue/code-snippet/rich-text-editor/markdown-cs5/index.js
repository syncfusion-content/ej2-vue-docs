
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Image,  Link, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings"><p>Rich
        Text Editorallows to insert images from online source as well as local
            computer where you want to insert the image in your content.</p>
            <p><b>Get started Quick Toolbar to click on the image</b></p>
            <p>It is possible to add custom style on the selected image inside the Rich Text Editor through quick toolbar.</p>
        </ejs-richtexteditor>
        </div>
    </div>
</div>
</div>
`,

    data: function() {
        return {
            toolbarSettings: {
                items: ['CreateLink']
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Image,  Link, HtmlEditor]
    }

});