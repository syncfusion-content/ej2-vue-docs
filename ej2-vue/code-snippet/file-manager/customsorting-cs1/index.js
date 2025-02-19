import Vue from "vue";
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent, sortComparer } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :height="height" :ajaxSettings="ajaxSettings" :sortComparer="sortComparer" :detailsViewSettings="detailsViewSettings">
        </ejs-filemanager>
    </div>
`,

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
            },
            height: "330px"
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    }
});