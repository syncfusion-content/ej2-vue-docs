<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [
     {
    id: 'node1',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 200,
    offsetY: 170,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node2' }],
  },
  {
    id: 'node3',
    width: 100,
    height: 60,
    offsetX: 400,
    offsetY: 240,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node3' }],
  }
];
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagram.ej2Instances;
        let selArray = [];
        selArray.push(diagramInstance.nodes[0], diagramInstance.nodes[1], diagramInstance.nodes[2]);
        //Selects the nodes
        diagramInstance.select(selArray);
        //Distributes space between the nodes
        diagramInstance.distribute('RightToLeft', diagramInstance.selectedItems.nodes);
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
