
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
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" :selectionChanging="selectionChanging" width="550px"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Text</ejs-button>
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