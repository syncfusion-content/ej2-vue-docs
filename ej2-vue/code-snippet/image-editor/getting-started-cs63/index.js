
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
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="loadImage">Load PNG Image</ejs-button>
    </div>
  `,
  data: function () {
    return {
      uploadSettings: {
        allowedExtensions: ".png, .svg"
      }
    };
  },
  methods: {
    loadImage: function () {
      this.$refs.imageEditorObj.ej2Instances.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg');
    }
  }
});