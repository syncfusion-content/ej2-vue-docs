<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :getNodeDefaults='getNodeDefaults'
            :getConnectorDefaults='getConnectorDefaults' :layout='layout'
            :dataSourceSettings='dataSourceSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams';
import { DataManager, Query } from "@syncfusion/ej2-data";

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

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
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
            //Sets the default properties for nodes and connectors
            getNodeDefaults: (node) => {
                //node.annotations = [{ content: node.data.Role }];
                node.width = 75; node.height = 40;
                return node;
            },
            getConnectorDefaults: (connector) => {
                connector.type = 'Orthogonal';
                return connector;
            },
        }
    },
    provide: {
        diagram: [HierarchicalTree, DataBinding]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
