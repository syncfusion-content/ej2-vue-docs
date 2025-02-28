
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :uploadSettings="uploadSettings"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="loadInvalidImage">Load Invalid Image</ejs-button>
    </div>
  `,
  data: function () {
    return {
      uploadSettings: {
        minFileSize: 1024,     // Minimum file size in bytes (1 KB)
        maxFileSize: 90 * 1024  // Maximum file size in bytes (90 KB)
      }
    };
  },
  methods: {
    loadInvalidImage: function (event) {
      this.$refs.imageEditorObj.ej2Instances.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
    }
  }

});