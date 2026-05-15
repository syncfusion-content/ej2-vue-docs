<template>
    <div id="app">
        <ejs-diagram id="diagram" ref="diagramRef" :width='width' :height='height' :nodes='nodes'>
        </ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: "rectangle1",
    offsetX: 100,
    offsetY: 100,
    width: 100,
    height: 100,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
    },
    annotations: [{
        content: 'rectangle1'
    }]
},
{
    id: "rectangle2",
    offsetX: 200,
    offsetY: 200,
    width: 100,
    height: 100,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
    },
    annotations: [{
        content: 'rectangle2'
    }]
}];
let group = {
    id: 'group2',
    children: ['rectangle1', 'rectangle2']
};
export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },
    mounted: function () {
        const diagramInstance = this.$refs.diagramRef.ej2Instances;
        diagramInstance.selectAll();
        // Add the group into the diagram
        diagramInstance.add(group);
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