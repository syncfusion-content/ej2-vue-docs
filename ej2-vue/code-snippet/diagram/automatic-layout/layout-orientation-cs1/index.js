
import Vue from 'vue';
import { DiagramPlugin, Diagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);

//Initialize data source
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

let diagramInstance;

new Vue({
    el: '#app',
    template: `
<div id="app">

      <label for="orientation">Orientation : </label>
      <select id="orientation" ref="orientationVal" v-on:change="onOrientationChange()">
        <option value="TopToBottom">TopToBottom</option>
        <option value="BottomToTop">BottomToTop</option>
        <option value="LeftToRight">LeftToRight</option>
        <option value="RightToLeft">RightToLeft</option>
      </select>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'></ejs-diagram>
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
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            },

            onOrientationChange() {
                let orientation = this.$refs.orientationVal.value;
                diagramInstance.layout.orientation = orientation;
                diagramInstance.dataBind();
            }
        }
    },
    mounted: function () {
        diagramInstance = this.$refs.diagramObj.ej2Instances;
    }
});