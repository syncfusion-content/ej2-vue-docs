
import Vue from "vue";
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: "#app",
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
      <ejs-button id="open-btn" v-on:click.native="openImage">Open Image</ejs-button>
    </div>
  `,
  data() {
    return {
      toolbar: [],
    };
  },
  methods: {
    openImage() {
      this.$refs.imageEditorObj.ej2Instances.open("https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg");
    },
  },
});
