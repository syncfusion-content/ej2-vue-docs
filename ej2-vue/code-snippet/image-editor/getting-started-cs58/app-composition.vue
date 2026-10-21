<template>
    <div>
        <ejs-button cssClass="e-img-button" :isPrimary="true" @click="openDialog">Open dialog</ejs-button>
        <ejs-dialog id="profile-dialog" ref="dialogRef" :isModal="true" width="340px" height="420px"
            :visible="dialogVisible" :closeOnEscape="true" @overlayClick="closeDialog">
            <div class="control-section">
                <div id="imageeditor">
                    <ejs-imageeditor ref="imageEditorRef" height="350px"></ejs-imageeditor>
                </div>
            </div>
        </ejs-dialog>
    </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { DialogComponent as EjsDialog } from "@syncfusion/ej2-vue-popups";
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const dialogRef = ref(null);
const imageEditorRef = ref(null);
const dialogVisible = ref(false);

const openDialog = async () => {
    dialogVisible.value = true;
    await nextTick();
    setTimeout(() => {
        if (imageEditorRef.value?.ej2Instances) {
            imageEditorRef.value.ej2Instances.open(
                "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
            );
        }
    }, 10);
};

const closeDialog = () => {
    dialogVisible.value = false;
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#profile-dialog {
    max-height: 420px !important;
}
</style>