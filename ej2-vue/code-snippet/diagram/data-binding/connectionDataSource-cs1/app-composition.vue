<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, DataBinding, HierarchicalTree, DiagramTools } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";
const data = [
    { id: "288192",  Name: "SWGREM4-B", shapeType: "Electrical Analytical Bus" },
      { id: "288193", ParentId: "288192", Name: "ATS-EQ-1", shapeType: "Electrical Analytical Transformer" },
      { id: "288198", ParentId: "288192", Name: "ATS-EQ-2", shapeType: "Electrical Analytical Transfer Switch" }
];

const designConnectors = () => {
        let connectors = [];
        let count = 1;
        data.forEach(node => {
            const childNodes = checkIfAnyChildExists(node.id);
            childNodes.forEach((child, index) => {
                connectors.push(
                    {
                        "id": `connector-${count}`,
                        "sourceID": node.id,
                        "srcPortID": `portOut-${child.id}`,
                        "targetID": child.id,
                        "targetPortID": `portIn-${child.id}`,
                    }
                );
                count = count + 1;
            });
        });
        return connectors;
}

const checkIfAnyChildExists = (id) => {
    let childNotes = [];
        data.forEach((data) => {
          if (data.ParentId == id) {
            childNotes.push(data);
          }
        });
        return childNotes;
}
const width = "100%";
const height = "350px";
const layout = {
    type: 'OrganizationalChart',
}
//Sets the default values of nodes
const getNodeDefaults = (node) => {
    node.width = 75; node.height = 40;
}
//Sets the default values of connector
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
}
const dataSourceSettings = {
    id: 'id',
    dataSource: data,
    connectionDataSource: { 
        id: 'id',  
        sourceID: 'sourceID',
        targetID: 'targetID',
        dataManager: designConnectors()
    }
}
//Disables all interactions except zoom/pan
const tool = DiagramTools.ZoomPan
const snapSettings = { constraints: 0 }

provide('diagram', [DataBinding, HierarchicalTree]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
