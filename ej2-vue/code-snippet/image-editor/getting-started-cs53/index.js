
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :fileOpened="fileOpened" ></ejs-imageeditor>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    fileOpened: function() {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'Syncfusion', 'Arial', 40, false, false, '#80330075');
    }
  }

});