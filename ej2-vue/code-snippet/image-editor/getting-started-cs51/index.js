
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :beforeSave="beforeSaved" :saved="saved"></ejs-imageeditor>
</div>
`,

  data: function() {
      return { };
  },
  methods: {
    beforeSaved: function(event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'Syncfusion', 'Arial', 40, false, false, '#80330075');
    },
    saved: function(event) {
      this.$refs.imageEditorObj.ej2Instances.deleteShape(shapes[shapes.length - 1].id);
    }
  }

});