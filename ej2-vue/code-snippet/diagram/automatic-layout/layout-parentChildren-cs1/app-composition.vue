<template>
    <div id="app">

        <div style="height: 600px; width: 150px; float: left">
            <ejs-symbolpalette id="symbolpalette" width="100%" height="600px" :palettes="palettes" :symbolHeight="50"
                :symbolWidth="100">
            </ejs-symbolpalette>
        </div>

        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height'
            :dataSourceSettings='dataSourceSettings' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout' :onDrop="onDrop"></ejs-diagram>

    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import {
    DiagramComponent as EjsDiagram, SymbolPaletteComponent as EjsSymbolpalette, HierarchicalTree,
    DataBinding, NodeConstraints, randomId
} from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let diagramInstance;
let diagramObj = ref(null);

//Initialize data
let data = [
    { Name: 'Steve-Ceo' },
    { Name: 'Kevin-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'Peter-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'John-Manager', ReportingPerson: 'Peter-Manager' },
    { Name: 'Mary-CSE', ReportingPerson: 'Peter-Manager' },
    { Name: 'Jim-CSE', ReportingPerson: 'Kevin-Manager' },
    { Name: 'Martin-CSE ', ReportingPerson: 'Kevin-Manager' },
];
//Initialize shapes for symbol palette
let palettes = [
    {
        title: 'Basic shapes',
        id: 'basicShapes',
        symbols: [
            {
                id: 'Node',
                width: 100,
                height: 50,
                data: { Name: 'New Node' },
            },
        ],
    },
];

let items = new DataManager(data, new Query().take(7));

const width = "1000px";
const height = "590px";

//Configures data source for Diagram
const dataSourceSettings = {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items
}
//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    //Sets layout type
    type: 'HierarchicalTree',
}

//Sets the default properties for nodes and connectors
const getNodeDefaults = (node) => {
    node.width = 100; node.height = 40;
    node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
    return node;
}
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    return connector;
}

onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

const onDrop = (args) => {
    setTimeout(() => {
        let node = args.element; // The node being dragged
        let targetNode = args.target; // The target node where it's being dropped

        // Check if there are connectors associated with the dropped node
        let edges = diagramInstance.getEdges(node);
        if (edges && edges.length > 0) {
            let connector = diagramInstance.getObject(edges[0]);
            connector.sourceID = targetNode.id;
            diagramInstance.dataBind(); // Refresh diagram data
        } else {
            let newCon = {
                id: 'newcon' + randomId(),
                sourceID: targetNode.id,
                targetID: node.id,
            };
            if (newCon.sourceID === undefined) {
                newCon.sourceID = diagramInstance.nodes[0].id;
            }
            diagramInstance.dataBind(); // Refresh the data
            diagramInstance.add(newCon); // Add the new connector
        }

        diagramInstance.doLayout(); // Apply the layout after the drop
    }, 100);
}

provide('diagram', [HierarchicalTree, DataBinding]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>