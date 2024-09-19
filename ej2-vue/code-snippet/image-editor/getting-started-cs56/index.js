
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
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :selectionChanging="selectionChanging" :toolbar="toolbar"></ejs-imageeditor>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    selectionChanging: function(event) {
      if (args.action == "resize") {
        args.currentSelectionSettings = args.previousSelectionSettings;
      }
    }
  }

});