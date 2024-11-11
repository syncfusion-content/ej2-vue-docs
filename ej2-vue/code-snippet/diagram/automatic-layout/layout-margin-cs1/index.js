
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

//Initialize data source
let data = [
    { Name: "Steve-Ceo" },
    { Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo" },
    { Name: "Peter-Manager", ReportingPerson: "Kevin-Manager" },
    { Name: "John-Manager", ReportingPerson: "Peter-Manager" },
    { Name: "Mary-CSE ", ReportingPerson: "Peter-Manager" },
];

let items = new DataManager(data, new Query().take(7));

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

    <label for="marginLeft">Margin Left : </label>
    <input type="number" ref="marginLeft" id="marginLeft" value="100" v-on:change="onLeftChange()">

    <label for="marginTop">Margin Top : </label>
    <input type="number" ref="marginTop" id="marginTop" value="100" v-on:change="onTopChange()">


    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'
        :snapSettings="snapSettings"></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            snapSettings: { constraints: 0 },

            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'HierarchicalTree',

                //Sets layout alignment
                horizontalAlignment: 'Left',
                verticalAlignment: 'Top',
                margin: { left: 100, top: 100 },
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
            onLeftChange() {
                let leftValue = Number(this.$refs.marginLeft.value);
                if (leftValue < 20) {
                    leftValue = 20;
                }
                if (leftValue > 500) {
                    leftValue = 500;
                }
                diagramInstance.layout.margin.left = leftValue;
                diagramInstance.dataBind();
            },

            onTopChange() {
                let topValue = Number(this.$refs.marginTop.value);
                if (topValue < 20) {
                    topValue = 20;
                }
                if (topValue > 500) {
                    topValue = 500;
                }
                diagramInstance.layout.margin.top = topValue;
                diagramInstance.dataBind();
            },
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});