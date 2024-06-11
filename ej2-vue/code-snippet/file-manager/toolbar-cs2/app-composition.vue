<template>
    <div id="app">
        <ejs-filemanager id="file-manager"  ref="fileManagerInstance" :ajaxSettings="ajaxSettings" >
        <e-toolbaritems>
                    <e-toolbaritem name="NewFolder"></e-toolbaritem>
                    <e-toolbaritem name="Upload"></e-toolbaritem>
                    <e-toolbaritem name="SortBy"></e-toolbaritem>
                    <e-toolbaritem name="Refresh"></e-toolbaritem>
                    <e-toolbaritem name="Cut"></e-toolbaritem>
                    <e-toolbaritem name="Copy"></e-toolbaritem>
                    <e-toolbaritem name="Paste"></e-toolbaritem>
                    <e-toolbaritem name="Delete"></e-toolbaritem>
                    <e-toolbaritem name="Download"></e-toolbaritem>
                    <e-toolbaritem name="Rename"></e-toolbaritem>
                    <e-toolbaritem name="Select" :template="'checkboxTemplate'">
                        <template v-slot:checkboxTemplate>
                            <div><ejs-checkbox ref="checkBoxInstance" :label='Select All' :checked=false :change="onChange"></ejs-checkbox></div>
                        </template>
                    </e-toolbaritem>
                    <e-toolbaritem name="Selection"></e-toolbaritem>
                    <e-toolbaritem name="View"></e-toolbaritem>
                    <e-toolbaritem name="Details"></e-toolbaritem>
                </e-toolbaritems>
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";

import { FileManagerComponent as EjsFilemanager, ToolbarItemsDirective as EToolbaritems, ToolbarItemDirective as EToolbaritem, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
import { CheckBoxComponent as EjsCheckbox} from "@syncfusion/ej2-vue-buttons";

const fileManagerInstance = ref(null);
const checkBoxInstance = ref(null);
const ajaxSettings =
{
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);
const onChange = function(args){
    if (args.checked) {
        fileManagerInstance.value.selectAll(); 
        checkBoxInstance.value.label = 'Unselect All';
    }
    else {
       fileManagerInstance.value.clearSelection();
       checkBoxInstance.value.label = 'Select All';
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

.e-fe-tick::before {
    content: '\e614';
}
</style>