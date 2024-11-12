
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

let diagramInstance;

export let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Kevin-Manager" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE ", ReportingPerson: "Peter-Manager" },
];

let items = new DataManager(data, new Query().take(7));

new Vue({
    el: '#app',
    template: `
<div id="app">


<label for="horizontalSpacing">Horizontal Spacing : </label>
<input type="number" ref="horizontal" id="horizontalSpacing" value="30" v-on:change="onHorizontalChange()">

<label for="verticalSpacing">Vertical Spacing : </label>
<input type="number" ref="vertical" id="verticalSpacing" value="30" v-on:change="onVerticalChange()">

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
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
                type: 'HierarchicalTree',
                //set layout spacing
                horizontalSpacing: 30,
                verticalSpacing: 30,
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
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            },
            onHorizontalChange: () => {
                let horizontalSpacing = Number(this.$refs.horizontal.value);
                if (horizontalSpacing < 20) {
                    horizontalSpacing = 20;
                }
                if (horizontalSpacing > 100) {
                    horizontalSpacing = 100;
                }
                diagramInstance.layout.horizontalSpacing = horizontalSpacing;
                diagramInstance.dataBind();
            },

            onVerticalChange: () => {
                let verticalSpacing = Number(this.$refs.vertical.value);
                if (verticalSpacing < 20) {
                    verticalSpacing = 20;
                }
                if (verticalSpacing > 100) {
                    verticalSpacing = 100;
                }
                diagramInstance.layout.verticalSpacing = verticalSpacing;
                diagramInstance.dataBind();
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }

});