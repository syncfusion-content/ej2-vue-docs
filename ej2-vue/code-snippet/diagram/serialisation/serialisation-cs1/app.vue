<template>
    <div id="app">
        
        <ejs-uploader ref="uploadObj" id="defaultfileupload" name="UploadFiles" :asyncSettings="path"
            :success="onUploadSuccess" ></ejs-uploader>
        <button v-on:click="saveDiagram">Save Diagram</button>

        <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
    </div>
</template>

<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';

var diagramInstance;
var nodes = [
    {
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 150,
        annotations: [{ id: 'label1', content: 'Start' }],
        shape: { type: 'Flow', shape: 'Terminator' },
    },
];

export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
        'ejs-uploader': UploaderComponent,
    },
    data() {
        return {
            width: '100%',
            height: '650px',
            nodes: nodes,
            path: {
                saveUrl:
                    'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl:
                    'https://services.syncfusion.com/vue/production/api/FileUploader/Remove',
            }
        };
    },
    methods: {
        // Handle file upload success
        onUploadSuccess(args) {
            const file = args.file.rawFile;
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onloadend = this.loadDiagram;
        },

        // Load diagram data from file
        loadDiagram(event) {
            const jsonString = event.target.result;
            diagramInstance.loadDiagram(jsonString);
        },

        // Download diagram as a JSON file
        download(data) {
            if (window.navigator.msSaveBlob) {
                const blob = new Blob([data], {
                    type: 'data:text/json;charset=utf-8,',
                });
                window.navigator.msSaveBlob(blob, 'Diagram.json');
            } else {
                const dataStr =
                    'data:text/json;charset=utf-8,' + encodeURIComponent(data);
                const a = document.createElement('a');
                a.href = dataStr;
                a.download = 'Diagram.json';
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        },

        // Save the diagram
        saveDiagram() {
            const diagramData = diagramInstance.saveDiagram();
            this.download(diagramData);
        },
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>