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
                            <div>
                                <ejs-checkbox ref="checkBoxInstance" :label="chkLabel" :checked="false" :change="onChange" ></ejs-checkbox>
                            </div>
                        </template>
                    </e-toolbaritem>
                    <e-toolbaritem name="Selection"></e-toolbaritem>
                    <e-toolbaritem name="View"></e-toolbaritem>
                    <e-toolbaritem name="Details"></e-toolbaritem>
                </e-toolbaritems>
        </ejs-filemanager>
    </div>
</template>
<script>

import { FileManagerComponent, DetailsView, NavigationPane, Toolbar, ToolbarItemDirective, ToolbarItemsDirective } from "@syncfusion/ej2-vue-filemanager";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent,
        "e-toolbaritems":ToolbarItemsDirective,
        "e-toolbaritem":ToolbarItemDirective,
        "ejs-checkbox":CheckBoxComponent,
    },
    data () {
        return {
           ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            },
            label: 'Select All'
        };
    },
    computed: {
        chkLabel: {
            get: function () {
                return this.label;
            },
            set: function (label) {
                this.label = label;
            },
        },
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        onChange: function (args) {
            var fileObj = this.$refs.fileManagerInstance.ej2Instances;
            if (args.checked) {
                fileObj.selectAll();
                this.label = 'Unselect All';
            } else {
                fileObj.clearSelection();
                this.label = 'Select All';
            }
        },
    }
}
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

.e-fe-tick::before {
    content: '\e614';
}
</style>