

import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { FileManagerPlugin } from "@syncfusion/ej2-vue-filemanager";

Vue.use(ImageEditorPlugin);
Vue.use(FileManagerPlugin);

new Vue({
  el: '#app',
  template: `
  <div>
    <ejs-filemanager id="file-manager" height="200px" width="550px" :fileSystemData="fileSystemData" @fileOpen="fileOpen"></ejs-filemanager>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
  </div>
  `,
  data() {
    return {
      fileSystemData: [
        {
          dateCreated: new Date("2023-11-15T19:02:02.341Z"),
          dateModified: new Date("2024-01-08T16:55:20.946Z"),
          filterPath: "\\",
          hasChild: true,
          id: "0",
          isFile: false,
          name: "Pictures",
          parentId: "0",
          size: 0,
          type: "folder"
        },
        {
          dateCreated: new Date("2023-11-15T19:02:02.341Z"),
          dateModified: new Date("2024-01-08T16:55:20.946Z"),
          filterPath: "\\Pictures\\",
          hasChild: false,
          id: "1",
          isFile: true,
          name: "Flower.png",
          parentId: "0",
          size: 69632,
          type: ".png",
          imageUrl: "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        },
        {
          dateCreated: new Date("2023-11-15T19:02:02.341Z"),
          dateModified: new Date("2024-01-08T16:55:20.946Z"),
          filterPath: "\\Pictures\\",
          hasChild: false,
          id: "2",
          isFile: true,
          name: "Bridge.png",
          parentId: "0",
          size: 48951,
          type: ".png",
          imageUrl: "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg"
        }
      ]
    };
  },
  methods: {
    fileOpen(args) {
      let file = args.fileDetails;
      if (file.isFile && file.imageUrl) {
        args.cancel = true;
        this.$refs.imageEditorObj.ej2Instances.open(file.imageUrl);
      }
    }
  },
});
