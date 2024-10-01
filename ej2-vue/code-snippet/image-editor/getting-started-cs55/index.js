
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" :selectionChanging="selectionChanging" width="550px"></ejs-imageeditor>
</div>
`,

  data: function() {
      return {
      };
  },
  methods: {
    selectionChanging: function(args) {
      if (args.action === "insert" && args.currentSelectionSettings.type === "Custom") {
        args.currentSelectionSettings.height = 200;
        args.currentSelectionSettings.width = 200;
      }
    }
  }

});