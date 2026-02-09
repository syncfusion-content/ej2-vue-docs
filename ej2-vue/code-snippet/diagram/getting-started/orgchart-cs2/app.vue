<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :setNodeTemplate='setNodeTemplate' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, DataBinding, StackPanel, TextElement, ImageElement } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";

export let localdata = [
    {
        Name: "Elizabeth",
        Role: "Director",

    },
    {
        Name: "Christina",
        ReportingPerson: "Elizabeth",
        Role: "Manager",

    },
    {
        Name: "Yoshi",
        ReportingPerson: "Christina",
        Role: "Lead",

    },
    {
        Name: "Philip",
        ReportingPerson: "Christina",
        Role: "Lead",

    },
    {
        Name: "Yang",
        ReportingPerson: "Elizabeth",
        Role: "Manager",

    },
    {
        Name: "Roland",
        ReportingPerson: "Yang",
        Role: "Lead",
    },
    {
        Name: "Yvonne",
        ReportingPerson: "Yang",
        Role: "Lead",

    }
];
export default {
    components: {
        'ejs-diagram': DiagramComponent
    },
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "550px",
            getNodeDefaults: (node) => {
                node.height = 60;
                node.width = 100;
                node.style = { fill: "#659be5", strokeColor: "none" };
                return node;
            },
            getConnectorDefaults: (obj) => {
                obj.type = 'Orthogonal';
                return obj;
            },
            setNodeTemplate: (node) => {
                let codes = {
                    Director: "rgb(0, 139,139)",
                    Manager: "rgb(30, 30,113)",
                    Lead: "rgb(0, 100,0)"
                };
                let content = new StackPanel();
                content.id = node.id + "_outerstack";
                content.orientation = "Horizontal";
                content.style.strokeColor = "gray";
                content.style.fill = codes[node.data.Role];
                content.padding = { left: 5, right: 5, top: 5, bottom: 5 }
                let innerContent = new ImageElement();
                innerContent.style.strokeColor = "blue";
                innerContent.id = node.id + "_innerstack";
                innerContent.style.fill = "skyblue";
                innerContent.width = 50;
                innerContent.height = 50;
                let text = new TextElement();
                text.id = node.id + "_text";
                text.content = node.data.Name;
                text.margin = { left: 15, right: 5, top: 5, bottom: 5 }
                text.style.color = "black";
                content.children = [innerContent, text];
                return content;
            },
            layout: {
                type: "OrganizationalChart",
            },
            dataSourceSettings: {
                id: 'Name', parentId: 'ReportingPerson',
                dataManager: new DataManager(localdata),
                doBinding: (nodeModel, localdata) => {
                    nodeModel.shape = {
                        type: "Text",
                        content: (localdata).Role,
                    }
                }
            }
        }
    },
    provide: { diagram: [DataBinding, HierarchicalTree] },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>