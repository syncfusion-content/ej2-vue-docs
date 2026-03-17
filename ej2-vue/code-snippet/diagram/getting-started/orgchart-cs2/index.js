
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
    <ejs-diagram id="diagram" :width='width' :height='height'  :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings' ></ejs-diagram>
</div>
`,

    name: 'app',
    data () {
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
    provide: {diagram: [DataBinding, HierarchicalTree]},

});