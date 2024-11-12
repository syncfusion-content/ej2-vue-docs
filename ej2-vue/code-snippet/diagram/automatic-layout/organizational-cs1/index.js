
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

//Initialize data source
let data = [
    {
        Id: 'parent',
        Role: 'Project Management',
    },
    {
        Id: 1,
        Role: 'R&D Team',
        Team: 'parent',
    },
    {
        Id: 3,
        Role: 'Philosophy',
        Team: '1',
    },
    {
        Id: 4,
        Role: 'Organization',
        Team: '1',
    },
    {
        Id: 5,
        Role: 'Technology',
        Team: '1',
    },
    {
        Id: 7,
        Role: 'Funding',
        Team: '1',
    },
    {
        Id: 8,
        Role: 'Resource Allocation',
        Team: '1',
    },
    {
        Id: 9,
        Role: 'Targeting',
        Team: '1',
    },
    {
        Id: 11,
        Role: 'Evaluation',
        Team: '1',
    },
    {
        Id: 156,
        Role: 'HR Team',
        Team: 'parent',
    },
    {
        Id: 13,
        Role: 'Recruitment',
        Team: '156',
    },
    {
        Id: 112,
        Role: 'Employee Relation',
        Team: '156',
    },
    {
        Id: 17,
        Role: 'Production & Sales Team',
        Team: 'parent',
    },
    {
        Id: 119,
        Role: 'Design',
        Team: '17',
    },
    {
        Id: 19,
        Role: 'Operation',
        Team: '17',
    },
    {
        Id: 20,
        Role: 'Support',
        Team: '17',
    },
    {
        Id: 21,
        Role: 'Quality Assurance',
        Team: '17',
    },
    {
        Id: 23,
        Role: 'Customer Interaction',
        Team: '17',
    },
    {
        Id: 24,
        Role: 'Support and Maintenance',
        Team: '17',
    },
    {
        Id: 25,
        Role: 'Task Coordination',
        Team: '17',
    }
];

let items = new DataManager(data, new Query().take(7));

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'>
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
                type: 'OrganizationalChart',
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
                node.width = 75; node.height = 40;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                connector.targetDecorator.shape = 'None';
                return connector;
            }
        };
    },
});
