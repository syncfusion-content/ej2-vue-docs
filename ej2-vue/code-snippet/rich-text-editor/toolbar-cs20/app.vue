<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section" id="rteSection">
        <ejs-richtexteditor ref="rteObj" :quickToolbarSettings="quickToolbarSettings" :toolbarClick="onToolbarClick">
        <p>Rich Text Editor allows to insert images from online source as well as local
            computer where you want to insert the image in your content.</p>
        <p><b>Get started Quick Toolbar to click on the image</b></p>
        <p>It is possible to add custom style on the selected image inside the Rich Text Editor through quick toolbar.</p>
        <img id="rteImageID" style="width:300px; height:300px;transform: rotate(0deg);" alt="Logo" src="https://ej2.syncfusion.com/demos/src/rich-text-editor/images/RTEImage-Feather.png"></ejs-richtexteditor>
        </div>
    </div>
</div>

</div>
</template>

<style>
.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {
    content: "\e341";
}

.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {
    content: "\e354";
}
</style>

<script>
import { RichTextEditorComponent, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection } from "@syncfusion/ej2-vue-richtexteditor";
export default {
name: "App",
components: {
"ejs-richtexteditor":RichTextEditorComponent
},
    data: function() {
        return {
        quickToolbarSettings: {
            image: [
                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
                'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension',
                {
                    tooltipText: 'Rotate Left',
                    template: '<button class="e-tbar-btn e-btn" id="roatateLeft"><span class="e-btn-icon e-icons e-rotate-left"></span>'
                },
                {
                    tooltipText: 'Rotate Right',
                    template: '<button class="e-tbar-btn e-btn" id="roatateRight"><span class="e-btn-icon e-icons e-rotate-right"></span>'
                }
            ]
        }
        };
        },
        methods: {
            onToolbarClick: function(e) {
            var nodeObj = new NodeSelection();
            var range = nodeObj.getRange(this.$refs.rteObj.ej2Instances.contentModule.getDocument());
            var imgEle = nodeObj.getNodeCollection(range)[0];
            if (e.item.tooltipText === 'Rotate Right') {
                var transform = (imgEle.style.transform === '') ? 0 :
                    parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10);
                imgEle.style.transform = 'rotate(' + (transform + 90) + 'deg)';
            }
            else if (e.item.tooltipText === 'Rotate Left') {
                var transform = (imgEle.style.transform === '') ? 0 :
                    Math.abs(parseInt(imgEle.style.transform.split('(')[1].split(')')[0], 10));
                imgEle.style.transform = 'rotate(-' + (transform + 90) + 'deg)';
            }
            }
        },
    provide:{
        richtexteditor:[Toolbar, Image,  Link, HtmlEditor, QuickToolbar]
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>