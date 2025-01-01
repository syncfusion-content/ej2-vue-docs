
import Vue from 'vue';
import {DiagramPlugin,Diagram,NodeModel,Node,Connector,DataBinding,HierarchicalTree,TreeInfo,DiagramTools} from '@syncfusion/ej2-vue-diagrams';
import { DataManager,Query } from "@syncfusion/ej2-data";
Vue.use(DiagramPlugin);
Diagram.Inject(DataBinding, HierarchicalTree);

let data = [
    { id: "288192",  Name: "SWGREM4-B", shapeType: "Electrical Analytical Bus" },
      { id: "288193", ParentId: "288192", Name: "ATS-EQ-1", shapeType: "Electrical Analytical Transformer" },
      { id: "288198", ParentId: "288192", Name: "ATS-EQ-2", shapeType: "Electrical Analytical Transfer Switch" }
];

const designConnectors = () => {
        let connectors = [];
        let count = 1;
        data.forEach(node => {
            const childNodes = checkIfAnyChildExists(node.id);
            childNodes.forEach((child, index) => {
                connectors.push(
                    {
                        "id": `connector-${count}`,
                        "sourceID": node.id,
                        "srcPortID": `portOut-${child.id}`,
                        "targetID": child.id,
                        "targetPortID": `portIn-${child.id}`,
                    }
                );
                count = count + 1;
            });
        });
        return connectors;
}

const checkIfAnyChildExists = (id) => {
    let childNotes = [];
        data.forEach((data) => {
          if (data.ParentId == id) {
            childNotes.push(data);
          }
        });
        return childNotes;
}

new Vue({
el: '#app',
template: `
<div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            layout: {
                //Sets layout type
                type: 'OrganizationalChart',
            },
        //Sets the default values of nodes
        getNodeDefaults: (node: Node) => {
            node.width = 75; node.height = 40;
        },
        //Sets the default values of connector
        getConnectorDefaults: (connector: Connector) => {
            connector.type = 'Orthogonal';
        },
        dataSourceSettings: {
            id: 'id',
            //parentId: 'ParentId',
            dataSource: data,
            connectionDataSource: { 
                id: 'id',  
                sourceID: 'sourceID',
                targetID: 'targetID',
                dataManager: designConnectors()
            }
        },
        //Disables all interactions except zoom/pan
        tool: DiagramTools.ZoomPan,
        snapSettings: { constraints: 0 }
        provide: {
            diagram: [DataBinding, HierarchicalTree]
        },
    }
}

});