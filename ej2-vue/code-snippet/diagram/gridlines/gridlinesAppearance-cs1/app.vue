<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :snapSettings='snapSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, SnapConstraints, Snapping } from '@syncfusion/ej2-vue-diagrams';

let snapSettings = {
    // Define the Constraints for gridlines and snapping
    constraints: SnapConstraints.ShowLines,
    // Defines the horizontalGridlines for SnapSettings
    horizontalGridlines: {
        // Sets the line color of gridlines
        lineColor: 'blue',
        // Defines the lineDashArray of gridlines
        lineDashArray: '2 2'
    },
    // Defines the verticalGridlines for SnapSettings
    verticalGridlines: {
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
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
