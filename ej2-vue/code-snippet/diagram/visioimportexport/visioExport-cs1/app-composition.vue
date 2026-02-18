<template>
    <div id="app">
      <button v-on:click="exportVisio">Export</button>
  
      <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes" :connectors="connectors" :diagramExporting="diagramExporting"></ejs-diagram>
  
    </div>
</template>
  
  <script setup>
    import { provide, ref, onMounted } from "vue";
    import { DiagramComponent as EjsDiagram, ImportAndExportVisio } from '@syncfusion/ej2-vue-diagrams';
    
    let diagramInstance;
    let diagramObj = ref(null);
    
    let nodes = [
        {
            id: 'Start',
            width: 100,
            height: 100,
            offsetX: 300,
            offsetY: 200,
            annotations: [
                {
                    content: 'Start',
                }
            ],
            ports: [{
                id: 'port1',
                offset: {
                    x: 1,
                    y: 0.5
                }
            }],
            style: { fill: '#2AA8D9', strokeColor: 'grey' }
        },
        {
            id: 'End',
            width: 100,
            height: 100,
            offsetX: 600,
            offsetY: 200,
            annotations: [
                {
                    content: 'End',

                }
            ],
            style: { fill: '#2AA8D9', strokeColor: 'grey' }
        }
    ];

    let connectors = [
        {
            id: 'connector1',
            sourceID: 'Start',
            sourcePortID: 'port1',
            targetID: 'End',
            annotations: [
                {
                    content: 'Connect',
                    alignment: 'Before',
                    displacement: { y: 10 },
                }
            ]
        }
    ];
    
    const width = "1000px";
    const height = "700px";
    const diagramExporting = function() {
        if (args.status === 'started') {
            // Export has started: show loader / disable UI
        }
        else if (args.status === 'completed') {
            // Export completed: hide loader / enable UI
        }
        else if (args.status === 'failed') {
            // Export failed: show error message
            console.error('Visio export failed.', args);
        }
    }

    const exportVisio = () => {
        let exportOptions = {};
        exportOptions.fileName = 'diagram1.vsdx';
        exportOptions.pageName = 'page1';
        diagramInstance.exportToVisio(exportOptions);
    };

    onMounted(function () {
        diagramInstance = diagramObj.value.ej2Instances;
    })
    
    provide('diagram', [ImportAndExportVisio]);
  
  </script>
  
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
  </style>