
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";

Vue.use(ImageEditorPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" height="350px" width="550px"></ejs-imageeditor>
    </div>
  `,
  data: function () {
    return {};
  }

});