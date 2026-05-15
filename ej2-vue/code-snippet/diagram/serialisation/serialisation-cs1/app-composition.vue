<template>
    <div id="app">
  
      <ejs-uploader ref="uploadObj" id="defaultfileupload" name="UploadFiles" :asyncSettings="path"
        :success="onUploadSuccess"></ejs-uploader>
      <button v-on:click="saveDiagram">Save Diagram</button>
  
      <ejs-diagram id="diagram" ref="diagramObj" :width="width" :height="height" :nodes="nodes"></ejs-diagram>
  
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
  import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
  
  let diagramInstance;
  let diagramObj = ref(null);
  
  // Data properties
  const nodes = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 150,
      annotations: [{ id: 'label1', content: 'Start' }],
      shape: { type: 'Flow', shape: 'Terminator' }
    },
  ];
  
  const width = "1000px";
  const height = "590px";
  
  const path = {
    saveUrl:
      'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/vue/production/api/FileUploader/Remove',
  };
  
  
  onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
  })
  
  // Handle file upload success
  const onUploadSuccess = (args) => {
    const file = args.file.rawFile;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = loadDiagram;
  }
  
  // Load diagram data from file
  const loadDiagram = (event) => {
    const jsonString = event.target.result;
    diagramInstance.loadDiagram(jsonString);
  }
  
  // Download diagram as a JSON file
  const download = (data) => {
    if (window.navigator.msSaveBlob) {
      const blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
      window.navigator.msSaveBlob(blob, 'Diagram.json');
    } else {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = 'Diagram.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }
  
  // Save the diagram
  const saveDiagram = () => {
    const diagramData = diagramInstance.saveDiagram();
    download(diagramData);
  }
  
  </script>
  
  <style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>