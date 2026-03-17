<template>
    <div id="app">
        <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :symbolWidth="80"
            :symbolHeight="80">
        </ejs-symbolpalette>
        <ejs-diagram id="diagram" width="1000px" height="500px" @dragEnter="dragEnter">
        </ejs-diagram>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SymbolPaletteComponent as EjsSymbolpalette, DiagramComponent as EjsDiagram, NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
// Reactive variables
const palettes = ref([
    {
        id: 'basic',
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
]);

// Function to get basic shapes
function getBasicShapes() {
    return [
        {
            id: 'rectangle',
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
            },
            tooltip: { content: 'Rectangle Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
            id: 'plus',
            shape: {
                type: 'Basic',
                shape: 'Plus',
            },
            tooltip: { content: 'Plus Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
            id: 'triangle',
            shape: {
                type: 'Basic',
                shape: 'RightTriangle',
            },
            tooltip: { content: 'RightTriangle Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
    ];
}

// Function to handle the dragEnter event
function dragEnter(args) {
    const node = args.element; // Retrieve the dragged node
    // Update the tooltip content based on the shape
    node.tooltip.content = `New ${node.shape.shape} node`;
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fabric.css";
</style>