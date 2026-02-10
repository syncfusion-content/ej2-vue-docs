<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'
            :snapSettings='snapSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'node1',
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
}]
let snapSettings = {
    // Enables the object to snap with both horizontal and Vertical gridlines
    constraints: SnapConstraints.SnapToLines | SnapConstraints.ShowLines
}
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
            snapSettings: snapSettings
        }
    },
    provide: {
        diagram: [Snapping]
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
