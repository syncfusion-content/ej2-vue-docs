import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'swim1',
        shape: {
            type: 'SwimLane',
            orientation: 'Horizontal',
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
                        annotation: { content: 'Online Consumer' },
                        style: { fontSize: 11, fill: 'red' },
                    },
                },
            ],
            phases: [
                {
                    id: 'phase1',
                    offset: 170,
                    header: { annotation: { content: 'Phase' } },
                },
            ],
            phaseSize: 20,
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
        <button @click="addLane">addLane</button>
        <button @click="removeLane">removeLane</button>
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
        
        addLane: function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            const swimlane = diagramInstance.getObject('swim1');
            const lane = [
                {
                    height: 100,
                    style: { fill: 'lightgrey' },
                    header: {
                        annotation: {
                            content: 'New Lane',
                            style: { fill: 'brown', color: 'white', fontSize: 15 },
                        },
                        style: { fill: 'pink' },
                    },
                },
            ];
            /**
             * To add lanes
             * parameter 1 - The swimlane to which lanes will be added.
             * parameter 2 - An array of LaneModel objects representing the lanes to be added.
             * paramter 3 - The index at which the lanes should be inserted (optional).
             */
            diagramInstance.addLanes(swimlane, lane, 1);
        },
        removeLane: function() {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            const swimlane = diagramInstance.getObject('swim1');
            //To get last lane in lane collection
            const lane = swimlane.shape.lanes[swimlane.shape.lanes.length - 1];
            /**
             * To remove lane
             * parameter 1 - The swimlane to remove the lane from.
             * parameter 2 - The lane to be removed
             */
            diagramInstance.removeLane(swimlane, lane);
        },
    },

    

});