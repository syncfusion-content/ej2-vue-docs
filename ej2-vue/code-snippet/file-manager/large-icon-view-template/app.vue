<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :cssClass="cssClass" :largeIconsTemplate="'largeTpl'" :ajaxSettings="ajaxSettings">
            <template v-slot:largeTpl="{ data }">
                <div class="custom-icon-card">
                <div class="file-header">
                    <div class="file-name" :title="data.name">{{ data.name }}</div>
                </div>
                <div :class="['e-list-icon', getFileIconCssClass(data)]"></div>
                <div class="file-formattedDate">
                    <template v-if="data.dateCreated">
                        Created on
                        <span
                            v-text="
                            new Date(data.dateCreated).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })
                            "
                        ></span>
                    </template>
                </div>
                </div>
            </template>
        </ejs-filemanager>
    </div>
</template>
<script>
import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent
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
            cssClass: 'e-fm-template-sample'
        };
    },
    provide: {
        filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        getFileIconCssClass(item) {
            if (!item.isFile) return 'e-fe-folder';
            const extensionMap = {
                jpg: 'image',
                jpeg: 'image',
                png: 'image',
                gif: 'image',
                mp3: 'music',
                wav: 'music',
                mp4: 'video',
                avi: 'video',
                doc: 'doc',
                docx: 'docx',
                ppt: 'pptx',
                pptx: 'pptx',
                xls: 'xlsx',
                xlsx: 'xlsx',
                txt: 'txt',
                js: 'js',
                css: 'css',
                html: 'html',
                exe: 'exe',
                msi: 'msi',
                php: 'php',
                xml: 'xml',
                zip: 'zip',
                rar: 'rar',
                pdf: 'pdf',
            };
            const extension = (item.name.split('.').pop() || '').toLowerCase();
            const iconType = extensionMap[extension] || 'unknown';
            return `e-fe-${iconType}`;
        }
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

.e-fm-template-sample .custom-icon-card {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.e-fm-template-sample .file-header {
  display: contents;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.e-fm-template-sample .file-name {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
}

.e-fm-template-sample .file-formattedDate {
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
  font-weight: 600;
}

.e-filemanager.e-fm-template-sample .e-large-icons .e-list-item {
  height: 150px;
  width: 135px;
}

</style>