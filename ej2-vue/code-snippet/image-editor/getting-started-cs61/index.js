
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { FileManagerPlugin } from "@syncfusion/ej2-vue-filemanager";

Vue.use(ImageEditorPlugin);
Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
<div>
<ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" height="350px" width="550px" :fileOpen='fileOpen'></ejs-filemanager>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
</div>
`,

  data() {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    return {
      ajaxSettings:
      {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
      }
    };
  },
  methods: {
    fileOpen: function(args) {
      let file = args.fileDetails;
      let fileName = file.name;
      let filePath = file.filterPath.replace(/\\/g, '/') + fileName;
      let basePath = document.getElementById('filemanager')?.ej2_instances[0];
      let imagePath = `${basePath.ajaxSettings.getImageUrl}?path=${filePath}`;
      if (file.isFile) {
        args.cancel = true;
        this.$refs.imageEditorObj.ej2Instances.open(imagePath);
      }
    }
  },
  provide: {
    filemanager: [DetailsView, NavigationPane, Toolbar]
  }

});