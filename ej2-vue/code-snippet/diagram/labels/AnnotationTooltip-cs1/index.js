
import Vue from 'vue';
import { DiagramPlugin, AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the Node
    annotations: [{
      content: 'Box',
      constraints: AnnotationConstraints.Tooltip,
      tooltip: {
        content: 'Box Text',
        position: 'TopRight',
        relativeMode: 'Object',
    },
    }]
}];

let connectors = [{
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 300
    },
    type: 'Orthogonal',
    // Sets the Annotation for the Connector
    annotations: [{
        content: 'Line',
        constraints: AnnotationConstraints.Tooltip,
        tooltip: {
            content: 'Line Text',
            position: 'TopRight',
            relativeMode: 'Object',
        },
    }]
}];

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors'></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
        }
    }

});