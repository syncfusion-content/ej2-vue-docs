import Vue from 'vue';
import { DiagramPlugin,Diagram } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let connector =[
    { id: 'connector1', sourcePoint: { x: 100, y: 100 }, targetPoint: { x: 150, y: 150 } },
    {id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 170, y: 170 }, targetPoint: { x: 200, y: 200 }},
    { id: 'connector3', type: 'Bezier', sourcePoint: { x: 220, y: 220 }, targetPoint: { x: 300, y: 300 } }
];
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
        }

    },
    mounted: function() {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        // Adds connector collection to the diagram
        diagramInstance.addElements(connector)
    }

});