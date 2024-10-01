
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);
var blobUrl;
new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" ></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="saveBlob">Save Blob</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="setImage">Open Image</ejs-button>
</div>
`,

  data: function() {
      return {
      };
  },
  methods: {
    saveBlob: function(event) {
      let imageData = this.$refs.imageEditorObj.ej2Instances.getImageData();
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
      canvas.toBlob((blob) =>{
        blobUrl = URL.createObjectURL(blob);// For getting blob.
      });
    },
    setImage: function(event) {
        this.$refs.imageEditorObj.ej2Instances.open(blobUrl);
    }
  }

});