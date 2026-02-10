<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :tool='tool' :getNodeDefaults='getNodeDefaults'
            :snapSettings='snapSettings' :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, DataBinding, HierarchicalTree, DiagramTools } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";

const width = "100%";
const height = "350px";
const layout = {
    type: 'HierarchicalTree', margin: { left: 0, right: 0, top: 100, bottom: 0 },
    verticalSpacing: 40,
    getLayoutInfo: (node, options) => {
        if (options.level === 3) {
            node.style.fill = '#3c418d';
        }
        if (options.level === 2) {
            node.style.fill = '#108d8d';
            options.type = 'Center';
            options.orientation = 'Horizontal';
        }
        if (options.level === 1) {
            node.style.fill = '#822b86';
        }
    }
}
//Sets the default values of nodes
const getNodeDefaults = (obj) => {
    obj.width = 80;
    obj.height = 40;
    //Initialize shape
    obj.shape = { type: 'Basic', shape: 'Rectangle' };
    obj.style = { fill: '#048785', strokeColor: 'Transparent' };
}
//Sets the default values of connector
const getConnectorDefaults = (connector) => {
    connector.type = 'Orthogonal';
    connector.style.strokeColor = '#048785';
    connector.targetDecorator.shape = 'None';
}
const dataSourceSettings = {
    id: "Id",
    parentId: "ParentId",
    dataSource: new DataManager(
        {
            url: "https://services.syncfusion.com/vue/production/api/RemoteData",
            crossDomain: true
        },
    ),
    //binds the external data with node
    doBinding: (nodeModel, data, diagram) => {
        nodeModel.annotations = [
            {
                /* tslint:disable:no-string-literal */
                content: data["Label"],
                style: { color: "white" }
            }
        ];
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
