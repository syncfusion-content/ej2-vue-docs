<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :snapSettings='snapSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

let snapSettings = {
    constraints: SnapConstraints.ShowLines,
    gridType: 'Dots',
    horizontalGridlines: {
        // Sets the lineIntervals of Gridlines
        dotIntervals:  [3, 20, 1, 20, 1, 20, 1, 20, 1, 20],
        lineColor: 'blue',
        lineDashArray: '2 2'
    },
    verticalGridlines: {
        // Sets the lineIntervals of Gridlines
        dotIntervals: [3, 20, 1, 20, 1, 20],
        lineColor: 'blue',
        lineDashArray: '2 2'
    }
};

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "350px",
            snapSettings: snapSettings
        }
    },
    provide: {
        diagram: [Snapping]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
