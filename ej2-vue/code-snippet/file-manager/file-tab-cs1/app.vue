<template>
  <div class="e-tab-section">
        <div class="col-lg-8 content-wrapper control-section">
            <div class="e-sample-resize-container">
                <ejs-tab ref="tabObj" id="tab_orientation" :showCloseButton="true">
                <e-tabitems>
                    <e-tabitem :header="headerText0" :content="OverviewTemplate"></e-tabitem>
                    <e-tabitem :header="headerText1" :content="FilemanagerTemplate"></e-tabitem>
                </e-tabitems>
                </ejs-tab>
            </div>
        </div>
    </div>
</template>
<script>

import { TabComponent, TabItemDirective, TabItemsDirective,} from '@syncfusion/ej2-vue-navigations';
import { FileManagerComponent, DetailsView, NavigationPane, Toolbar,} from '@syncfusion/ej2-vue-filemanager';
import { createApp } from 'vue';

var tabTemp = createApp().component('demoTemplate1', {
  template: ` <div><div class="cnt-text">Overview</div><div>The File Manager component contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system</div></div>`,
  data() {
    return {
      data: {},
    };
  },
});

var fileTemp = createApp().component('demoTemplate2', {
  components: {
    'ejs-filemanager': FileManagerComponent,
  },
  template:
    '<div><div class="content-title"><div class="cnt-text">File Manager with default functionalities</div></div><ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings"> </ejs-filemanager></div>',
  data() {
    return {
      ajaxSettings: {
        url: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations',
        getImageUrl:
          'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage',
        uploadUrl:
          'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload',
        downloadUrl:
          'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download',
      },
    };
  },
  provide: {
    filemanager: [DetailsView, NavigationPane, Toolbar],
  },
});

export default {
  name: 'App',
  components: {
    'ejs-tab': TabComponent,
    'e-tabitems': TabItemsDirective,
    'e-tabitem': TabItemDirective,
  },
  data: function () {
    return {
      headerText0: { text: 'Overview' },
      headerText1: { text: 'Filemanager' },
      OverviewTemplate: function () {
        return {
          template: tabTemp,
        };
      },
      FilemanagerTemplate: function () {
        return {
          template: fileTemp,
        };
      },
    };
  },
};
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

.content-title {
  height: 50px;
  display: table;
  margin: 0 auto;
}
.cnt-text {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
}
</style>
