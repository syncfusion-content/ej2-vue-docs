
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteObj" :insertImageSettings="insertImageSettings"><p>Rich Text Editor allows to insert images from online source as well as local
            computer where you want to insert the image in your content.</p>

            <p><b>Get started Quick Toolbar to click on the image</b></p>

            <p>It is possible to add custom style on the selected image inside the Rich Text Editor through quick toolbar.</p>
            <img id="rteImageID" style="width:300px; height:300px;transform: rotate(0deg);" alt="Logo" src="https://ej2.syncfusion.com/demos/src/rich-text-editor/images/RTEImage-Feather.png"></ejs-richtexteditor>
        </div>
    </div>
</div>
</div>
`,

    data: function() {
        return {
            insertImageSettings: {
                display: 'inline'
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Image,  Link, HtmlEditor, QuickToolbar]
    }

});