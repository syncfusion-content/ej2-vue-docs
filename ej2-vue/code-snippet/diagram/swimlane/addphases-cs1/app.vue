<template>
    <div id="app">
        <button @click = "addPhase">addPhase</button>
        <button @click = "removePhase">removePhase</button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
    id: 'swim1',
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
            offset: 120,
            header: { annotation: { content: 'Phase' } },
        },
        {
            id: 'phase2',
            offset: 200,
            header: { annotation: { content: 'Phase' } },
        },
        ],
        phaseSize: 20,
    },
    offsetX: 300,
    offsetY: 200,
    height: 200,
    width: 350,
}];

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
},
methods: {
  addPhase() {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    const swimlane = diagramInstance.getObject('swim1');
    const phase = [
    {
      id: 'phase3',
      offset: 250,
      header: { annotation: { content: 'New Phase' } },
    },
    ];
    /**
     * To add phases
     * parameter 1 - object representing the swimlane to which phases will be added.
     * parameter 2 - objects representing the phases to be added.
     */
    diagramInstance.addPhases(swimlane, phase);
  },
  removePhase() {
    const diagramInstance = this.$refs.diagram.ej2Instances;
    const swimlane = diagramInstance.getObject('swim1') 
    const phase = swimlane.shape.phases[swimlane.shape.phases.length - 1];
    /**
     * To remove phase
     * parameter 1 - representing the swimlane to remove the phase from.
     * paramter 2 - representing the phase to be removed.
     */
     diagramInstance.removePhase(swimlane, phase);
  },
},
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
