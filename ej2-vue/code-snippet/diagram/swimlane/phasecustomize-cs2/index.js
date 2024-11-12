import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    id: 'swimlane',
    shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        //Intialize header to swimlane
        header: {
        annotation: {
            content: 'ONLINE PURCHASE STATUS'
        },
        height: 50,
        style: { fontSize: 11 },
        },
        lanes: [
        {
            id: 'stackCanvas1',
            height: 100,
            header: {
            annotation: { content: 'CUSTOMER' },
            width: 50,
            style: { fontSize: 11 },
            },
        },
        ],
        phases: [
        {
            id: 'phase1',
            offset: 150,
            addInfo: { name: 'phase1' },
            header: {
            annotation: {
                content: 'First phase',
                style: { fill: 'yellow', color: 'red' },
            },
            },
        },
        {
            id: 'phase2',
            offset: 200,
            header: { annotation: { content: 'Second phase' } },
            style: { fill: 'violet' },
        },
        ],
        phaseSize: 40,
    },
    offsetX: 300,
    offsetY: 200,
    height: 200,
    width: 350,
}]

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <button @click="updatePhase">updatePhase</button>
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
        
        updatePhase: function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            let swimlane = diagramInstance.nameTable['swimlane'];
            let phase = swimlane.shape.phases[0];
            phase.header.style.fill = 'orange';
            phase.header.annotation.content = 'phase updated';
            diagramInstance.dataBind();
            
        },
    }


});