
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
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="showAlert">Show Alert</ejs-button>
</div>
`,

  data: function() {
      return {
        uploadSettings: {
          allowedExtensions: ".png, .svg"
        }
      };
  },
  methods: {
    showAlert: function(event) {
      this.$refs.imageEditorObj.ej2Instances.open('flower.jpeg');
    }
  }

});