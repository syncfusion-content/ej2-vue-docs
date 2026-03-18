<template>
   <div id="app" style="width: 100%; display: flex">
    <ejs-diagram id="diagram" :width='width' :height='height'  :nodes='nodes'  style="flex: 7;" :snapSettings='snapSettings' :scrollSettings='scrollSettings'></ejs-diagram>
    <div style="flex: 3;height: 250px;padding: 0px;right: 30px;bottom: 20px;border: #eeeeee;border-style: solid;box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);background: #f7f7f7;">
        <ejs-overview id="overview"  :sourceID='overviewsourceID' :width='overviewwidth' :height='overviewheight'></ejs-overview>
    </div>
</div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, OverviewComponent as EjsOverview,SnapConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{id: 'node1', offsetX: 400, offsetY: 400, height: 100, width: 200}];
const width = "100%";
const height = "590px";
const snapSettings = {
    constraints: SnapConstraints.None 
};
const scrollSettings = {
    scrollLimit: 'Diagram'
};

const overviewsourceID = "diagram";
const overviewwidth = "300px";
const overviewheight = "150ppx";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
