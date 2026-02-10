<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation visibility true',
        // Sets the style for the text to be displayed
        style: {
            color: 'blue',
            bold: true,
            italic: true,
            fontSize: 15,
            fontFamily: 'TimesNewRoman',
            fill: 'orange',
            opacity: 0.6,
        },
        visibility:true
    },
    {
        content: 'Annotation visibility false',
        offset: { x: 0.5, y: 1 },
        style: {
          color: 'blue',
          bold: true,
          italic: true,
          fontSize: 15,
          fontFamily: 'TimesNewRoman',
          fill: 'orange',
          whiteSpace: 'PreserveAll',
          opacity: 0.6,
        },
        visibility: false,
    }
    ]
}]
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
