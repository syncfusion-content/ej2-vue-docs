<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" :sortComparer="sortComparer" :detailsViewSettings="detailsViewSettings">
        </ejs-filemanager>
    </div>
</template>

<script>

import { FileManagerComponent, DetailsView, NavigationPane, Toolbar, sortComparer } from "@syncfusion/ej2-vue-filemanager";

export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent,
    },
    data () {
        return {
           ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/NaturalSorting/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/NaturalSorting/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/NaturalSorting/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/NaturalSorting/Download"
            },
            sortComparer: sortComparer,
            detailsViewSettings: {
                columns: [
                    {field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto', customAttributes: { class: 'e-fe-grid-name' },template: '${name}', sortComparer: sortComparer},
                    {field: 'size', headerText: 'File Size',minWidth: 50, width: '110', template: '${size}'},
                    { field: '_fm_modified', headerText: 'Date Modified',minWidth: 50, width: '190'}
                ]
            }
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
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