<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section" id="rteSection">
                    <ejs-richtexteditor ref="rteObj" :value="rteValue" :quickToolbarSettings="quickToolbarSettings" :toolbarClick="onToolbarClick"></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent
    },
    data: function() {
        return {
            rteValue: `<p style="margin-right:10px">The custom command "insert special character" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.</p>`,
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
.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-left::before {
    content: "\e341";
}

.e-rte-quick-popup .e-rte-quick-toolbar .e-rotate-right::before {
    content: "\e354";
}
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>