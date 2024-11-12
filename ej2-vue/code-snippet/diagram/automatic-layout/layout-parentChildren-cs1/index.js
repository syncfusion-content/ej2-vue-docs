
import Vue from 'vue';
import { DiagramPlugin, SymbolPalettePlugin, Diagram, HierarchicalTree, DataBinding, NodeConstraints, randomId } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";
Diagram.Inject(DataBinding, HierarchicalTree);
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);

//Initialize data source
let data = [
    { Name: 'Steve-Ceo' },
    { Name: 'Kevin-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'Peter-Manager', ReportingPerson: 'Steve-Ceo' },
    { Name: 'John-Manager', ReportingPerson: 'Peter-Manager' },
    { Name: 'Mary-CSE', ReportingPerson: 'Peter-Manager' },
    { Name: 'Jim-CSE', ReportingPerson: 'Kevin-Manager' },
    { Name: 'Martin-CSE ', ReportingPerson: 'Kevin-Manager' },
];

//Initialize shapes for symbol palette
let palettes = [
    {
        title: 'Basic shapes',
        id: 'basicShapes',
        symbols: [
            {
                id: 'Node',
                width: 100,
                height: 50,
                data: { Name: 'New Node' },
            },
        ],
    },
];
let items = new DataManager(data, new Query().take(7));
let diagramInstance;
new Vue({
    el: '#app',
    template: `
<div id="app">

    <div style="height: 600px; width: 150px; float: left">
      <ejs-symbolpalette id="symbolpalette" :width="palettewidth" :height="paletteheight" :palettes="palettes"
        :symbolHeight="symbolHeight" :symbolWidth="symbolWidth"></ejs-symbolpalette>
    </div>

    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
        :getConnectorDefaults='getConnectorDefaults' :layout='layout' :dataSourceSettings='dataSourceSettings'
        :drop="onDrop" ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "80%",
            height: "590px",
            palettes: palettes,
            palettewidth: "100%",
            paletteheight: "600px",
            symbolHeight: 50,
            symbolWidth: 100,
            //Uses layout to auto-arrange nodes on the Diagram page
            layout: {
                //Sets layout type
                type: 'HierarchicalTree'
            },

            //Configures data source for Diagram
            dataSourceSettings: {
                id: 'Name',
                parentId: 'ReportingPerson',
                dataManager: items
            },

            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                node.width = 100; node.height = 40;
                node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            },

            onDrop(args) {
                setTimeout(() => {
                    let node = args.element; // The node being dragged
                    let targetNode = args.target; // The target node where it's being dropped

                    // Check if there are connectors associated with the dropped node
                    let edges = diagramInstance.getEdges(node);
                    if (edges && edges.length > 0) {
                        let connector = diagramInstance.getObject(edges[0]);
                        connector.sourceID = targetNode.id;
                        diagramInstance.dataBind(); // Refresh diagram data
                    } else {
                        let newCon = {
                            id: 'newcon' + randomId(),
                            sourceID: targetNode.id,
                            targetID: node.id,
                        };
                        if (newCon.sourceID === undefined) {
                            newCon.sourceID = diagramInstance.nodes[0].id;
                        }
                        diagramInstance.dataBind(); // Refresh the data
                        diagramInstance.add(newCon); // Add the new connector
                    }

                    diagramInstance.doLayout(); // Apply the layout after the drop
                }, 100);
            },
        }
    },
    mounted: function () {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
    }

});