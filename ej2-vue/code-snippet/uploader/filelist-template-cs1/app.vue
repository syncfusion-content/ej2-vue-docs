<template>
    <div>
        <div class="col-lg-12 control-section uploader customdroparea">
            <div class="control_wrapper">
                <div class="sample_wrapper">
                    <div id="dropArea">
                        <span id="drop" class="droparea"> Drop files here or <a href="" id="browse"><u>Browse</u></a>
                        </span>
                        <ejs-uploader id='templateupload' name="UploadFiles" :template='fileTemplate'
                            :allowedExtensions='extensions' :asyncSettings="path" ref="uploadObj" :dropArea="dropArea"
                            :success="onSuccess" :failure="onFailure" :progress="onProgress" :removing="onFileRemove">
                        </ejs-uploader>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { detach } from '@syncfusion/ej2-base';
import {createApp} from 'vue';

var demoVue = createApp().component("demo", {
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

export default {
    name: "App",
    components: {
        "ejs-uploader": UploaderComponent
    },
    data: function () {
        return {
            path: {
                saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
            },
            extensions: '.pdf, .png, .txt',
            dropArea: "#dropArea",
            fileTemplate: function () {
                return { template: demoVue }
            }
        }
    },
    mounted: function () {
        document.getElementById('browse').onclick = function () {
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
    methods: {
        onSuccess: function (args) {
            let li = this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status;
            li.querySelector('.upload-status').classList.add('upload-success');
        },
        onFailure: function (args) {
            let li = this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status;
            li.querySelector('.upload-status').classList.add('upload-failed');
        },
        getLiElement: function (args) {
            let liElements = document.getElementsByClassName('e-upload')[0].querySelectorAll('.e-upload-files > li');
            let li;
            for (let i = 0; i < liElements.length; i++) {
                if (liElements[i].getAttribute('data-file-name') === args.file.name) {
                    li = liElements[i];
                }
            }
            return li;
        },
        onProgress: function (args) {
            let progressValue = Math.round((args.e.loaded / args.e.total) * 100) + '%';
            let li = this.getLiElement(args);
            li.querySelector('.upload-status').innerHTML = args.file.status + '(' + progressValue + ' )';
        },
        onFileRemove: function (args) {
            args.postRawFile = false;
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

#container {
    visibility: hidden;
    padding-left: 5%;
    width: 100%;
}

#loader {
    color: #008cff;
    font-family: 'Helvetica Neue', 'calibiri';
    font-size: 14px;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

.sf-icon-bmp:before {
    content: "\e700";
}

.sf-icon-xlsx:before,
.sf-icon-XLSX:before {
    content: "\e701";
}

.sf-icon-avi:before,
.sf-icon-AVI:before {
    content: "\e702";
}

.sf-icon-doc:before,
.sf-icon-DOC:before {
    content: "\e703";
}

.sf-icon-exe:before {
    content: "\e704";
}

.sf-icon-mp4:before {
    content: "\e705";
}

.sf-icon-zip:before,
.sf-icon-ZIP:before {
    content: "\e706";
}

.sf-icon-tar:before {
    content: "\e707";
}

.sf-icon-docx:before {
    content: "\e708";
}

.sf-icon-jpg:before {
    content: "\e709";
}

.sf-icon-png:before {
    content: "\e70a";
}

.sf-icon-gif:before {
    content: "\e70b";
}

.sf-icon-pdf:before {
    content: "\e70c";
}

.sf-icon-txt:before {
    content: "\e70d";
}

.sf-icon-jpeg:before {
    content: "\e70e";
}

.sf-icon-xls:before {
    content: "\e70f";
}

.sf-icon-mp3:before {
    content: "\e710";
}

.customdroparea .e-upload {
    border-top: none;
    border-bottom: none;
}

.customdroparea .e-upload .e-upload-files {
    border-top: none;
}

.customdroparea {
    margin: auto 160px;
}

.customdroparea #dropArea .e-upload .e-upload-files .e-upload-file-list {
    min-height: 0;
}

.customdroparea #drop {
    padding: 6% 27% 6% 22%;
    display: block;
    border: 1px dashed #c3c3cc;
}

.customdroparea #drop a {
    color: blue;
}

.highcontrast .customdroparea #drop a {
    color: #ffd939;
}

.customdroparea #UploaderDropTarget {
    min-height: 50px;
    padding-top: 15px;
    position: relative;
    display: inline-block;
    font-size: 13px;
    top: -29px;
    width: 400px;
}

.customdroparea .e-file-select-wrap {
    display: none;
}

.customdroparea span.dropText {
    position: relative;
    left: 31%;
    top: 101px;
}

.customdroparea .dropArea_wrap {
    width: 400px;
    height: 250px;
    background-color: lightgrey;
    display: inline-block;
    margin: 22px;
    border: 1px dashed grey;
}

.highcontrast .customdroparea .dropArea_wrap {
    background-color: #000;
}

.customdroparea .font-icons {
    position: relative;
    top: 25%;
    left: 32%;
    width: 150px;
}

.customdroparea .upload-failed {
    color: #d9534f;
}

.customdroparea .e-upload .wrapper .upload-success {
    color: #107c10;
}

.customdroparea span.upload-status {
    left: 45px;
    position: relative;
    font-size: 12px;
    display: block;
    padding: 5px;
    top: -8px;
}

#UploaderDropTarget .e-upload .e-upload-files .e-file-reload-btn:hover,
#dropArea .e-upload .e-upload-files .e-file-reload-btn {
    display: none;
}

#UploaderDropTarget .e-file-abort-btn.e-upload-progress {
    background-image: none;
    cursor: default;
    opacity: .35;
}

#UploaderDropTarget .e-icons.e-file-delete-btn:hover {
    background: none;
}

.customdroparea .e-upload .e-upload-files .e-file-remove-btn.e-icons,
.customdroparea .e-upload .e-upload-files .e-file-delete-btn.e-icons {
    top: 50%;
}

@font-face {
    font-family: 'FiletypeV2 Font';
    src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

[class^="sf-icon-"],
[class*=" sf-icon-"] {
    font-family: 'FiletypeV2 Font' !important;
    speak: none;
    font-size: 35px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    top: 15px;
}

.customdroparea .ul-element {
    list-style: none;
    width: 100%;
    padding-left: 0;
}

.customdroparea span.list-wrapper {
    max-height: 400px;
    display: block;
    margin-left: 10px;
    position: relative;
    top: 2px;
}

.customdroparea .file-name {
    padding: 8px 6px 5px 12px;
    font-size: 13px;
    width: 76%;
    display: inline-block;
    position: relative;
}

.customdroparea .file-size {
    padding: 4px;
    font-size: 13px;
    width: 18%;
    display: inline-block;
    position: relative;
}

.customdroparea .file-lists {
    border: 1px solid lightgray;
    padding: 0 6px 0 14px;
    margin-top: 15px;
    position: relative;
    background: rgba(0, 0, 0, 0.04);
}

.customdroparea .file-size,
.customdroparea .file-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

/* csslint ignore:end */
</style>