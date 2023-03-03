
import Vue from "vue";
import { UploaderPlugin, SelectedEventArgs } from '@syncfusion/ej2-vue-inputs';
import { createElement, detach, EventHandler } from '@syncfusion/ej2-base';
import { FileInfo } from '@syncfusion/ej2-vue-inputs/uploader';

Vue.use(UploaderPlugin);

var demoVue = Vue.component("demo", {
    template: `<div class='container'>
                    <span class='wrapper'>
                    <span :class="['icon sf-icon-' +data.type]"></span>
                    <span class='name file-name'>{{data.name}} ( {{data.size}} bytes)</span>
                    <span class='upload-status'>{{data.status}}</span>
                    <span class='e-icons e-file-remove-btn' title='Remove'></span>
                    </span>
                </div>`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
    <div>
        <div class="col-lg-12 control-section uploader customdroparea">
            <div class="control_wrapper">
                <div class="sample_wrapper">
                    <div id="dropArea">
                        <span id="drop" class="droparea"> Drop files here or <a href="" id="browse"><u>Browse</u></a> </span>
                        <ejs-uploader id='templateupload' name="UploadFiles" :template='fileTemplate' :allowedExtensions= 'extensions' :asyncSettings= "path" ref="uploadObj" :dropArea= "dropArea" :success= "onSuccess" :failure= "onFailure" :progress = "onProgress" :removing= "onFileRemove">
                        </ejs-uploader>
                    </div>
                </div>
            </div>
        </div>
    </div>
`,

    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            },
            extensions: '.pdf, .png, .txt',
            dropArea: "#dropArea",
            fileTemplate: function (){
                return { template: demoVue }
            }
        }
    },
    mounted: function () {
        document.getElementById('browse').onclick = function() {
            document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
            return false;
        };
        document.getElementById('dropArea').onclick = (args) => {
            if (args.target.classList.contains('e-file-delete-btn')) {
                for (var i = 0; i < this.$refs.uploadObj.getFilesData().length; i++) {
                    if (args.target.closest('li').getAttribute('data-file-name') === this.$refs.uploadObj.getFilesData()[i].name) {
                        this.$refs.uploadObj.remove(this.$refs.uploadObj.getFilesData()[i]);
                    }
                }
            }
            else if (args.target.classList.contains('e-file-remove-btn')) {
                detach(args.target.closest('li'));
            }
        };
    },
    methods:{
        onSuccess: function(args) {
            let li = this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status;
            li.querySelector('.upload-status').classList.add('upload-success');
        },
        onFailure: function(args) {
            let li = this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status;
            li.querySelector('.upload-status').classList.add('upload-failed');
        },
        getLiElement: function(args) {
            let liElements = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-files > li');
            let li;
            for (let i= 0; i < liElements.length; i++) {
                if ( liElements[i].getAttribute('data-file-name') === args.file.name ) {
                li = liElements[i];
                }
            }
            return li;
        },
        onProgress: function(args) {
            let progressValue = Math.round((args.e.loaded / args.e.total) * 100) + '%';
            let li = this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status + '(' + progressValue + ' )';
        },
        onFileRemove: function (args) {
            args.postRawFile = false;
        }
    }

});