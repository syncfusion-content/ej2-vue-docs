<template>
    <div id="app">
        <label for="alignment">Alignment: </label>
        <select id="alignment" ref="alignChange" v-on:change="onAlignmentChange()">
            <option value="Center">Center</option>
            <option value="Right">Right</option>
            <option value="Left">Left</option>
            <option value="Balanced">Balanced</option>
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
    { Id: 1, Role: 'General Manager' },
    { Id: 2, Role: 'Assistant Manager', Team: 1 },
    { Id: 3, Role: 'Human Resource Manager', Team: 1 },
    { Id: 4, Role: 'Design Manager', Team: 1 },
    { Id: 5, Role: 'Operation Manager', Team: 1 },
    { Id: 6, Role: 'Marketing Manager', Team: 1 },
];

let items = new DataManager(data, new Query().take(7));
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "590px",
            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'OrganizationalChart',
                // define the getLayoutInfo
                getLayoutInfo: (node, options) => {
                    if (!options.hasSubTree) {
                        options.type = 'Center';
                        options.orientation = 'Horizontal';
                    }
                },
            },
            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Id',
                parentId: 'Team',
                dataSource: items,
            },
            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.annotations = [{ content: node.data.Role }];
                node.width = 150; node.height = 50;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                connector.targetDecorator.shape = 'None';
                return connector;
            },
        }
    },
    provide: {
        diagram: [HierarchicalTree, DataBinding]
    },
    methods: {
        onAlignmentChange() {
            const alignChangeInstance = this.$refs.alignChange.value;
            diagramInstance.layout.getLayoutInfo = (node, options) => {
                if (!options.hasSubTree) {
                    options.type = alignChangeInstance;
                    options.orientation = 'Horizontal';
                }
            };
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
