

<template>
    <div class="control-section">
            <div class="filemanagerContainer">
                <!-- Filemanager element -->
                <ejs-filemanager id="file" ref="filemanagerObj"  :ajaxSettings="ajaxSettings" :fileLoad="fileLoad">
                </ejs-filemanager>
            </div>
  </div>
</template>
<script>
import Vue from "vue";
import { getValue, select } from '@syncfusion/ej2-base';
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
    data () {
        return {
            ajaxSettings:  {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            }
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
     methods:{
      // File Manager's fileOpen event function
      fileLoad: function(args) {
          const target = args.element;
          if (args.module==='DetailsView') {
              const element = select('[title]', args.element);
              const title = getValue('name', args.fileDetails) +
                  '\n' + getValue('dateModified', args.fileDetails);
              element.setAttribute('title', title);
          } else if (args.module==='LargeIconsView') {
              const title= getValue('name', args.fileDetails) +
                  '\n' + getValue('dateModified', args.fileDetails);
              target.setAttribute('title', title);
          }
      }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material.css";

</style>


