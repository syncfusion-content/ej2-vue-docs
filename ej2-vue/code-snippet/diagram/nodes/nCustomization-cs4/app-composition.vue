<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script setup>
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const radialGradient = {
                //Center point of outer circle
                cx: 50, cy: 50, 
                //Center point of inner circle
                fx: 25, fy: 25,
                //Radius of a radial gradient
                 r: 50,
                  //Sets an array of stop objects
                stops: [{ color: 'white', offset: 0 },
                { color: '#6BA5D7', offset: 100 }],
                type: 'Radial'
            };


const nodes = [{
    // Position of the node
    offsetX: 350,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {gradient: radialGradient, strokeColor: 'white' }
        }];

const width = "100%";
const height = "700px";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
