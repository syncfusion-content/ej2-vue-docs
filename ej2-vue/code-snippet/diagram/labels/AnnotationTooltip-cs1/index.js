
import Vue from 'vue';
import { DiagramPlugin,AnnotationConstraints } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the Annotation for the Node
    annotations: [{
        id: 'label1',
        content: 'Rectangle',
        tooltip: {
            content: 'Rectangle',
            position: 'TopRight',
            relativeMode: 'Object',
        },
        constraints: AnnotationConstraints.Tooltip,
    }],
}];


new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
           
        }
    }

});