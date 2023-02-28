

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
<script>
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
import { TabPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(TabPlugin);
Vue.use(FileManagerPlugin);

var Template1 = Vue.component("demo", {
  template: ` <div><div class="cnt-text">Overview</div><div>The file manager component contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system</div></div>`,
  data() {
    return {
      data: {}
    };
  }
});

var Template2 = Vue.component("demo", {
   template: ` <div><div class="content-title">
                   <div class="cnt-text">File manager with default functionalities</div>
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

export default {
    data () {
        return {
            headerText0: { text: 'Overview' },
            headerText1: { text: 'FileManager' },
            OverviewTemplate: function () {
              return {
                  template : Template1
              }
            },
            FilemanagerTemplate: function () {
              return {
                  template : Template2
              }
            },
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
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


