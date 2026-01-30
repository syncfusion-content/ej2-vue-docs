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

import { getValue, select } from '@syncfusion/ej2-base';
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent,
    },
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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/tailwind3.css";

</style>