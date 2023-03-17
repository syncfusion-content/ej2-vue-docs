
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Click</ejs-button>
</div>
`,

  data: function() {
      return {};
  },
  methods: {
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('images/flower.png');
        } else {
            this.$refs.imageEditorObj.open('images/bridge.png');
        }
    },
    btnClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.zoom(.1); // Zoom in
    }
  }

});