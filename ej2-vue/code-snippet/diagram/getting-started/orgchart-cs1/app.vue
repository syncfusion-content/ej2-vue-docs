<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";

let localdata = [
    {
        Name: "Elizabeth",
        Role: "Director"
    },
    {
        Name: "Christina",
        ReportingPerson: "Elizabeth",
        Role: "Manager"
    },
    {
        Name: "Yoshi",
        ReportingPerson: "Christina",
        Role: "Lead"
    },
    {
        Name: "Philip",
        ReportingPerson: "Christina",
        Role: "Lead"
    },
    {
        Name: "Yang",
        ReportingPerson: "Elizabeth",
        Role: "Manager"
    },
    {
        Name: "Roland",
        ReportingPerson: "Yang",
        Role: "Lead"
    },
    {
        Name: "Yvonne",
        ReportingPerson: "Yang",
        Role: "Lead"
    }
];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            getNodeDefaults: (node) => {
                node.height = 60;
                node.width = 100;
                return node;
            },
            getConnectorDefaults: (obj) => {
                obj.type = 'Orthogonal';
                return obj;
            },
            layout: {
                type: "OrganizationalChart",
            },
            dataSourceSettings: {
                id: 'Name', parentId: 'ReportingPerson',
                dataManager: new DataManager(localdata),
                doBinding: (nodeModel, localdata, diagram) => {
                    nodeModel.shape = {
                        type: "Text",
                        content: (localdata).Role,
                    }
                }
            }
        }
    },
    provide: { diagram: [DataBinding, HierarchicalTree] }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
