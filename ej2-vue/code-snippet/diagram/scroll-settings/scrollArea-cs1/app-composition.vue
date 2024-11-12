<template>
    <div id="app">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <label style="margin-right: 10px;">Scrollable Area</label>
          <ejs-dropdownlist id='scrollableArea' ref='scrollableArea' :enabled=true :value='scrollableAreaValue' :dataSource='scrollableArea' @change="onScrollableAreaChange"/>
        </div>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'
         ></ejs-diagram>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

let nodes = [{
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
}];
const diagram = ref(null);
const width = "750px";
const height = "350px";
// set the autoScrollBorder
const scrollSettings = {
    canAutoScroll: true,
    //Sets the scroll limit
    scrollLimit: 'Limited',
    //Sets the scrollable Area
    scrollableArea: {
        x: 0,
        y: 0,
        width: 1000,
        height: 1000
    }
}
const rulerSettings = { showRulers: true };
const scrollableArea = [
  { shape: 'Limited', text: 'Limited' },
  { shape: 'Infinity', text: 'Infinity' },
  { shape: 'Diagram', text: 'Diagram' },
];


function onScrollableAreaChange(args) {
    const diagramInstance = diagram.value.ej2Instances;
    diagramInstance.scrollSettings.scrollLimit = args.itemData.shape;
    diagramInstance.dataBind();
}

const scrollableAreaValue = 'Limited';
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
