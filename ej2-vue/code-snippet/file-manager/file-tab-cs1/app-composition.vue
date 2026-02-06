<template>
    <div class="e-tab-section">
        <div class="col-lg-8 content-wrapper control-section">
            <div class="e-sample-resize-container">
            <ejs-tab ref="tabObj" id="tab_orientation" :showCloseButton=true heightAdjustMode='Auto'>
                <e-tabitems>
                    <e-tabitem :header='headerText0' :content='OverviewTemplate'></e-tabitem>
                    <e-tabitem :header='headerText1' :content='FilemanagerTemplate'></e-tabitem>
                </e-tabitems>
            </ejs-tab>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from "@syncfusion/ej2-vue-navigations";
import {createApp} from 'vue';

const app = createApp({});

const Template1 = app.component("demoTemplate1", {
  template: ` <div><div class="cnt-text">Overview</div><div>The File Manager component contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system</div></div>`,
  data:() => ({})
});

const Template2 = Vue.component("demoTemplate2", {
    components: {
        "ejs-filemanager":FileManagerComponent,
    },
   template: ` <div><div class="content-title">
                   <div class="cnt-text">File Manager with default functionalities</div>
              </div>
              <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager></div>`,

  data() {
    return {
       ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            },
    };
  },
  provide: {
        filemanager: [DetailsView, NavigationPane, Toolbar]
}
});

const headerText0 = { text: 'Overview' };
const headerText1 = { text: 'FileManager' };
const OverviewTemplate = function () {
  return {
      template : Template1
  }
};
const FilemanagerTemplate = function () {
  return {
      template : Template2
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material3.css";

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