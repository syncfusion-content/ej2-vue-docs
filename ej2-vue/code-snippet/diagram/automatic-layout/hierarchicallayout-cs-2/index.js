
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

// Inject Diagram features into the Vue component
Diagram.Inject(HierarchicalTree, DataBinding);
Vue.use(DiagramPlugin);

export let data = [
    {
        Name: "Steve-Ceo"
    },
    {
        Name: "Kevin-Manager",
        ReportingPerson: "Steve-Ceo"
    },
    {
        Name: "Peter-Manager",
        ReportingPerson: "Steve-Ceo"
    },
    {
        Name: "John- Manager",
        ReportingPerson: "Peter-Manager"
    },
    {
        Name: "Mary-CSE ",
        ReportingPerson: "Peter-Manager"
    },
    {
        Name: "Jim-CSE ",
        ReportingPerson: "Kevin-Manager"
    },
    {
        Name: "Martin-CSE",
        ReportingPerson: "Kevin-Manager"
    }
];

// Initialize DataManager for the data source
let items = new DataManager(data, new Query().take(7));

// Create Vue instance
new Vue({
    el: '#app',
    template: `
        <div id="app">
            <ejs-diagram id="diagram" :width="width" :height="height" :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout="layout" :dataSourceSettings="dataSourceSettings">
            </ejs-diagram>
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
                type: 'HierarchicalTree',
            },

            // Configuring the DataSourceSettings for Diagram
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

            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            }

        };
    },
});
