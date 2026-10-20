<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="onCreated"
            :toolbarUpdating="toolbarUpdating"></ejs-imageeditor>
    </div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

export default {
    name: "App",
    components: {
        "ejs-imageeditor": ImageEditorComponent
    },
    data: function () {
        return {};
    },
    methods: {
        onCreated() {
            let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
            if (!imageEditor) return;
            let imageUrl = Browser.isDevice
                ? 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg'
                : 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg';
            imageEditor.open(imageUrl);
        },
        toolbarUpdating: function (args) {
            if (args.toolbarType === 'pen') {
                args.toolbarItems.forEach(item => {
                    if (item.align === 'Center' && (item.tooltipText === 'Stroke Width' || item.tooltipText === 'Remove' || item.type === 'Separator')) {
                        item.visible = false;
                    }
                });
            }
        }
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>