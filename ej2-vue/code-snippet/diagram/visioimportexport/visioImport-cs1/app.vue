<template>
    <div id="app">
        <ejs-uploader ref="uploadObj" id="defaultfileupload" name="UploadFiles" :asyncSettings="path"
        :success="onUploadSuccess" :allowedExtensions="'.vsdx'"></ejs-uploader>
        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :diagramImporting='diagramImporting'></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent, ImportAndExportVisio } from '@syncfusion/ej2-vue-diagrams';
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';

let diagramInstance;

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
        'ejs-uploader': UploaderComponent,
    },
    data() {
        return {
            width: '100%',
            height: '700px',
            diagramImporting: (args) => {
                if (args.status === 'started') {
                    // Import has started: show a loader / disable UI
                } else if (args.status === 'completed') {
                    // Import completed: hide loader / enable UI
                } else if (args.status === 'failed') {
                    console.error('Visio import failed.', args);
                }
            },
            path: {
                saveUrl:
                    'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl:
                    'https://services.syncfusion.com/vue/production/api/FileUploader/Remove',
            }
        };
    },
    methods: {
        async onUploadSuccess(args) {
            let file = args.file;
            let rawFile = file.rawFile;
            const warnings = await diagramInstance.importFromVisio(rawFile, { pageIndex: 0 });
            if (warnings.length) {
                for (var i = 0; i < warnings.length - 1; i++) {
                console.warn(warnings[i]);
                }
            }
        },

    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    },
    provide: { diagram: [ImportAndExportVisio] },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>