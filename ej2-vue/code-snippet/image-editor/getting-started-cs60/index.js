
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);
Vue.use(UploaderPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected="onSelect"></ejs-uploader>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
</div>
`,

  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    onSelect: function (args) {
      if (args.filesData.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
            this.$refs.imageEditorObj.ej2Instances.open(reader.result);
        };
        reader.readAsDataURL(args.filesData[0].rawFile);
    }
    },
  }

});