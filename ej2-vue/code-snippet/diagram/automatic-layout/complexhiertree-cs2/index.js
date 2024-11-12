
import Vue from 'vue';
import { DiagramPlugin, Diagram, ComplexHierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, ComplexHierarchicalTree);
Vue.use(DiagramPlugin);

export let data = [
    { "Name": "node11" },
    { "Name": "node12", "ReportingPerson": ["node114"] },
    { "Name": "node13", "ReportingPerson": ["node12"] },
    { "Name": "node14", "ReportingPerson": ["node12"] },
    { "Name": "node15", "ReportingPerson": ["node12"] },
    { "Name": "node16", "ReportingPerson": [] },
    { "Name": "node17", "ReportingPerson": ["node13", "node14", "node15"] },
    { "Name": "node18", "ReportingPerson": [] },
    { "Name": "node19", "ReportingPerson": ["node16", "node17", "node18"] },
    { "Name": "node110", "ReportingPerson": ["node16", "node17", "node18"] },
    { "Name": "node111", "ReportingPerson": ["node16", "node17", "node18", "node116"] },
    { "Name": "node21" },
    { "Name": "node22", "ReportingPerson": ["node114"] },
    { "Name": "node23", "ReportingPerson": ["node22"] },
    { "Name": "node24", "ReportingPerson": ["node22"] },
    { "Name": "node25", "ReportingPerson": ["node22"] },
    { "Name": "node26", "ReportingPerson": [] },
    { "Name": "node27", "ReportingPerson": ["node23", "node24", "node25"] },
    { "Name": "node28", "ReportingPerson": [] },
    { "Name": "node29", "ReportingPerson": ["node26", "node27", "node28", "node116"] },
    { "Name": "node210", "ReportingPerson": ["node26", "node27", "node28"] },
    { "Name": "node211", "ReportingPerson": ["node26", "node27", "node28"] },
    { "Name": "node31" },
    { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"] },
    { "Name": "node116", "ReportingPerson": ["node12", "node22"], }
];
let items = new DataManager(data, new Query().take(7));

new Vue({
    el: '#app',
    template: `
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'ComplexHierarchicalTree',
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Name',
                parentId: 'ReportingPerson',
                dataManager: items
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.width = 70; node.height = 70;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            }
        }
    },

});