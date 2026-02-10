<template>
    <div id="app">

        <label for="alignment">Alignment: </label>
        <select id="alignment" ref="alignChange" v-on:change="onAlignmentChange()">
            <option value="Left">Left</option>
            <option value="Right">Right</option>
            <option value="Alternate">Alternate</option>
        </select>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height'
            :dataSourceSettings='dataSourceSettings' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'></ejs-diagram>

    </div>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let diagramInstance;
let diagramObj = ref(null);
let alignChange = ref(null);

//Initialize data
let data = [
    { Id: 1, Role: 'General Manager' },
    { Id: 2, Role: 'Assistant Manager', Team: 1 },
    { Id: 3, Role: 'Human Resource Manager', Team: 1 },
    { Id: 4, Role: 'Design Manager', Team: 1 },
    { Id: 5, Role: 'Operation Manager', Team: 1 },
    { Id: 6, Role: 'Marketing Manager', Team: 1 },
];

let items = new DataManager(data, new Query().take(7));

const width = "1000px";
const height = "590px";

//Configures data source for Diagram
const dataSourceSettings = {
    id: 'Id',
    parentId: 'Team',
    dataSource: items,
}

//Uses layout to auto-arrange nodes on the Diagram page
const layout = {
    //Sets layout type
    type: 'OrganizationalChart',
    // define the getLayoutInfo
    getLayoutInfo: (node, options) => {
        if (!options.hasSubTree) {
            options.type = 'Left';
            options.orientation = 'Vertical';
        }
    },
}

//Sets the default properties for nodes and connectors
const getNodeDefaults = (node) => {
    node.annotations = [{ content: node.data.Role }];
    node.width = 150; node.height = 50;
    return node;
}
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    connector.targetDecorator.shape = 'None';
    return connector;
}
onMounted(function () {
    diagramInstance = diagramObj.value.ej2Instances;
})

const onAlignmentChange = () => {
    const alignChangeInstance = alignChange.value.value;
    diagramInstance.layout.getLayoutInfo = (node, options) => {
        if (!options.hasSubTree) {
            options.type = alignChangeInstance;
            options.orientation = 'Vertical';
        }
    };
};

provide('diagram', [HierarchicalTree, DataBinding]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>