
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
    <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :keyUp="keyUp" ></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            keyUp: (args) => {
                let diagramInstance: Diagram;
                let diagramObj: any = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                if (color === 'pink') {
                  color = 'yellow';
                  diagramInstance.nodes[0].style.fill = 'red';
                  diagramInstance.dataBind();
                } else {
                  color = 'pink';
                  diagramInstance.nodes[0].style.fill = 'pink';
                  diagramInstance.dataBind();
                }
            },
        }
    }

});