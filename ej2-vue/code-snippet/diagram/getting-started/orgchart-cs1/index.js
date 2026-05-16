
import Vue from 'vue';
import { DiagramPlugin, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from "@syncfusion/ej2-data";
Vue.use(DiagramPlugin);

export let localdata = [
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

new Vue({
    el: '#app',
    template: `
<div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            getNodeDefaults: (node) => {
                let codes = {
                    Director: "rgb(0, 139,139)",
                    Manager: "rgb(30, 30,113)",
                    Lead: "rgb(0, 100,0)"
                };
                node.width = 70;
                node.height = 30;
                node.annotations = [
                    { content: node.data.Name, style: { color: "white" } }
                ];
                node.style.fill = codes[node.data.Role];
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = "Orthogonal";
                connector.cornerRadius = 7;
                return connector;
            },
            layout: {
                type: "OrganizationalChart",
            },
            dataSourceSettings: {
                id: 'Name', parentId: 'ReportingPerson',
                dataManager: new DataManager(localdata),
            }
        }
    },
    provide: { diagram: [DataBinding, HierarchicalTree] },

});