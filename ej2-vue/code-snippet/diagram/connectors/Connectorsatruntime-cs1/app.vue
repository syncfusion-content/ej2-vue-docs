

<template>
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DiagramPlugin,Diagram,ConnectorModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connector: ConnectorModel = {
    // Name of the connector
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    // Sets source and target points
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}

export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
        }

    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        // Adds to the diagram
        diagramInstance.add(connector)
    }
}
</script>
<style>
    @import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>


