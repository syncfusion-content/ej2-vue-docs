import Vue from 'vue';
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(DialogPlugin);
Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="openDialog">Open Dialog</ejs-button>
      <ejs-dialog id="profile-dialog" ref="dialogRef" :isModal="true" width="340px" height="420px" :visible="dialogVisible" :closeOnEscape="true" @overlayClick="closeDialog">
        <div class="control-section">
          <div id="imageeditor">
            <ejs-imageeditor ref="imageEditorRef" height="350px"></ejs-imageeditor>
          </div>
        </div>
      </ejs-dialog>
    </div>
  `,
  data: function () {
    return {
      dialogVisible: false
    };
  },
  methods: {
    openDialog: function () {
      this.dialogVisible = true;
      this.$nextTick(() => {
        setTimeout(() => {
          let imageEditor = this.$refs.imageEditorRef?.ej2Instances;
          if (imageEditor) {
            imageEditor.open("https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png");
          }
        }, 10);
      });
    },
    closeDialog: function () {
      this.dialogVisible = false;
    },
  }
});
