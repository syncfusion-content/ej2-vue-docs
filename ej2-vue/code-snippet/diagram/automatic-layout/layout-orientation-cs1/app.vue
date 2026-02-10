<template>
    <div id="app">

        <label for="orientation">Orientation : </label>
        <select id="orientation" ref="orientationVal" v-on:change="onOrientationChange()">
            <option value="TopToBottom">TopToBottom</option>
            <option value="BottomToTop">BottomToTop</option>
            <option value="LeftToRight">LeftToRight</option>
            <option value="RightToLeft">RightToLeft</option>
        </select>

        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>

    </div>
</template>
<script>

import { DiagramComponent, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

let diagramInstance;
let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE", ReportingPerson: "Peter-Manager" },
    { Name: "Jim-CSE", ReportingPerson: "Kevin-Manager" },
    { Name: "Martin-CSE ", ReportingPerson: "Kevin-Manager" },
];
let items = new DataManager(data, new Query().take(7));
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "1000px",
            height: "350px",

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'HierarchicalTree',
                //Sets layout alignment
                horizontalAlignment: 'Left',
                verticalAlignment: 'Top',
                orientation: 'TopToBottom',
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Name',
                parentId: 'ReportingPerson',
                dataManager: items
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.annotations = [{ content: node.data.Name }];
                node.width = 100; node.height = 40;
                return node;
            },

            getConnectorDefaults: (connector, diagram) => {
                connector.type = 'Orthogonal';
                return connector;
            }
        }
    },
    provide: {
        diagram: [DataBinding, HierarchicalTree]
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    },
    methods: {
        onOrientationChange() {
            let orientation = this.$refs.orientationVal.value;
            diagramInstance.layout.orientation = orientation;
            diagramInstance.dataBind();
        }
    }

}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>