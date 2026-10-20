<template>
<div>
<ejs-imageeditor id="image-editor" height="350px" width="550px"></ejs-imageeditor>
</div>
</template>

<script setup>
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>