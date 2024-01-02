
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";

Vue.use(ImageEditorPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbarItemClicked="toolbarItemClicked"></ejs-imageeditor>

</div>
`,

  data: function() {
      return {
        toolbar: [{text: 'Custom'}]
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
    toolbarItemClicked: function(args) {
      if(args.item.text === 'Custom') {
        this.$refs.imageEditorObj.rotate(90);
      }
    }
  }
});