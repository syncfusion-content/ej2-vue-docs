<template>
  <div>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="openDialog">
      Open dialog
    </ejs-button>

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

<script>
import { ref, nextTick } from "vue";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-dialog": DialogComponent,
    "ejs-imageeditor": ImageEditorComponent,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    async openDialog() {
      this.dialogVisible = true;
      await nextTick();
      setTimeout(() => {
        if (this.$refs.imageEditorRef?.ej2Instances) {
          this.$refs.imageEditorRef.ej2Instances.open(
            "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
          );
        }
      }, 10);
    },
    closeDialog() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#profile-dialog {
  max-height: 420px !important;
}
</style>
