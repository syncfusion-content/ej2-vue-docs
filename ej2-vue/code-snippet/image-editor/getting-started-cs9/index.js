
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created = "created" :toolbar="toolbar"></ejs-imageeditor>
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
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
  }

});