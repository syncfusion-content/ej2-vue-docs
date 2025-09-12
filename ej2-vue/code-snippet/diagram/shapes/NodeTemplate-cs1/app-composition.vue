<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>

<script setup>
import { createApp } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

// Template for the HTML Shape.
const itemVue = createApp({}).component("nodeTemplate", {
    template: `<div style="background:#6BA5D7;height:100%;width:100%;"><button type="button" style="width:100px"> Button</button></div> `,
    data() {
      return {};
    }
});

const nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    shape: {
        type: 'HTML',
        content: function () {
            return { template: itemVue };
        }
    }
}];
const width = "750px";
const height = "500px";
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>