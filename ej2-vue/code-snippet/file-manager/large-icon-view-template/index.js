
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :height="height" :cssClass="cssClass" :largeIconsTemplate="'largeTpl'" :ajaxSettings="ajaxSettings">
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
`,

    data() {
        return {
            ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            },
            height: "375px",
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

});