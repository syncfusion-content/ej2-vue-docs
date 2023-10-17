
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";

Vue.use(ImageEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbarUpdating="toolbarUpdating"></ejs-imageeditor>

</div>
`,

  data: function() {
      return {};
  },
  methods: {
     toolbarUpdating: function(args) {
        if (args.toolbarType === 'shapes') {
            args.toolbarItems = ['strokeColor'];
        }
    }
  }

});