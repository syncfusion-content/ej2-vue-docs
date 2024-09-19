
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);
var blobUrl;
new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="getBlob">Get Blob</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: [],
        blobUrl: '',
      };
  },
  methods: {
    getBlob: function(event) {
      let imageData = this.$refs.imageEditorObj.ej2Instances.getImageData();
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
      canvas.toBlob((blob) =>{
        blobUrl = URL.createObjectURL(blob);// For getting blob.
      });
    }
  }

});