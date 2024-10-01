
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

var base64String;
new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" ></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="saveImage">Save base64</ejs-button>
</div>
`,

  data: function() {
      return {
        base64String: '',
      };
  },
  methods: {
    saveImage: function(event) {
      let imageData = this.$refs.imageEditorObj.ej2Instances.getImageData();
      const canvas = document.createElement('canvas');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      // Get the 2D rendering context of the canvas
      const context = canvas.getContext('2d');
      // Put the ImageData onto the canvas
      context.putImageData(imageData, 0, 0);
      // Convert the canvas content to a Base64 encoded URL
      base64String = canvas.toDataURL();
    }
  }

});