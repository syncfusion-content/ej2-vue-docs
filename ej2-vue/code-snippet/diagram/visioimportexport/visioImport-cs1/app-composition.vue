<template>
    <div id="app">
      <ejs-uploader ref="uploadObj" id="defaultfileupload" name="UploadFiles" :asyncSettings="path"
        :success="onUploadSuccess" :allowedExtensions="'.vsdx'"></ejs-uploader>
  
      <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :diagramImporting='diagramImporting'></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { provide, ref, onMounted } from "vue";
  import { DiagramComponent as EjsDiagram, ImportAndExportVisio } from '@syncfusion/ej2-vue-diagrams';
  import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
  
  let diagramInstance;
  let diagramObj = ref(null);
  
  const width = "1000px";
  const height = "700px";
  const diagramImporting = function() {
    if (args.status === 'started') {
        // Import has started: show a loader / disable UI
    } else if (args.status === 'completed') {
        // Import completed: hide loader / enable UI
    } else if (args.status === 'failed') {
        console.error('Visio import failed.', args);
    }
  }
  const path = {
    saveUrl:
      'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/vue/production/api/FileUploader/Remove',
  };
  
  onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
  })

  const onUploadSuccess = async (args) => {
    let file = args.file;
    let rawFile = file.rawFile;
    const warnings = await diagramInstance.importFromVisio(rawFile, { pageIndex: 0 });
    if (warnings.length) {
        for (var i = 0; i < warnings.length - 1; i++) {
        console.warn(warnings[i]);
        }
    }
  }
  
  provide('diagram', [ImportAndExportVisio]);
  
  </script>
  
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>