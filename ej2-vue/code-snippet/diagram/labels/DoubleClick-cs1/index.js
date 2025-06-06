
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation',
    }]
}]

let color = 'pink';

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :doubleClick="doubleClick" ></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            doubleClick: (args) => {
                // Handle double-click event for custom logic
            },
        }
    }

});