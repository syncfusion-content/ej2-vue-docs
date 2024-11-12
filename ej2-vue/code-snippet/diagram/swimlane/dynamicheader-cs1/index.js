import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
    let nodes = [{
      shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                // customize the swimlane header
                 header: {
                annotation: { content: 'SALES PROCESS FLOW CHART', },
                height: 70, style: { fontSize: 11 }, style: { fill: 'pink' },
            },
                lanes: [
                    {
                        id: 'stackCanvas1',
                        height: 100,
                    },

                ],
                phases: [
                    {
                        id: 'phase1', offset: 170,
                        header: { annotation: { content: 'Phase' } }
                    },
                    ],
                phaseSize: 20,
            },
             offsetX: 300, offsetY: 200,
            height: 200,
            width: 350
}]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="updateHeaderStyle">updateHeaderStyle</button>
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
    },
    methods: {
        updateHeaderStyle: function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.nodes[0].shape.header.style.fill = 'red';
            diagramInstance.dataBind(); 
        }
    },

});