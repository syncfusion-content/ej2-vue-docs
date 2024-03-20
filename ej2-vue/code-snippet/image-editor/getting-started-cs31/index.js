
import Vue from 'vue';
import { ImageEditorPlugin, ImageFinetunePlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="brightnessClick">Brightness</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="contrastClick">Contrast</ejs-button>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('flower.png');
        } else {
            this.$refs.imageEditorObj.open('bridge.png');
        }
    },
    brightnessClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Brightness, 10);
    },
    contrastClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Contrast, 10);
    }
  }

});