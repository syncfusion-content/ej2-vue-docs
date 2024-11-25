
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
Vue.use(FileManagerPlugin);
import { CheckBox } from '@syncfusion/ej2-buttons';

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager"  ref="fileManagerInstance" :ajaxSettings="ajaxSettings" :created='create'>
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
                    <e-toolbaritem name="Select" template='<input type="checkbox" id="checkbox1" />'>                        
                    </e-toolbaritem>
                    <e-toolbaritem name="Selection"></e-toolbaritem>
                    <e-toolbaritem name="View"></e-toolbaritem>
                    <e-toolbaritem name="Details"></e-toolbaritem>
                </e-toolbaritems>
        </ejs-filemanager>
    </div>
`,

    data () {
        return {
           ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            },
            checkBoxInstance: null
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        // Alert displayed for custom toolbar item in toolbarClick event
        create: function(args){
            this.checkBoxInstance = new CheckBox({ label: 'Select All',checked: false, change: this.onChange  });
            this.checkBoxInstance.appendTo('#checkbox1');
        },
        onChange: function(args) {
            if (args.checked) {
                this.$refs.fileManagerInstance.selectAll();
                this.checkBoxInstance.label = 'Unselect All';
            }
            else{
                this.$refs.fileManagerInstance.clearSelection();
                this.checkBoxInstance.label = 'Select All';
            }
        }
    }

});