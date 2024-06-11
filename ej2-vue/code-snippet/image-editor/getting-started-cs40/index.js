
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";

Vue.use(ImageEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbarItemClicked="toolbarItemClicked" :toolbar="toolbar"></ejs-imageeditor>

</div>
`,

  data: function() {
      return {
        toolbar: [{text: 'Custom'}]
      };
  },
  methods: {
    toolbarItemClicked: function(args) {
      if(args.item.text === 'Custom') {
        this.$refs.imageEditorObj.rotate(90);
      }
    }
  }
});