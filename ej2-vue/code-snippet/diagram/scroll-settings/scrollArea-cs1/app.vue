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
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

let nodes = [{
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
}];
let data = [
  { shape: 'Limited', text: 'Limited' },
  { shape: 'Infinity', text: 'Infinity' },
  { shape: 'Diagram', text: 'Diagram' },
];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent,
        'ejs-dropdownlist': DropDownListComponent,
    },
    data() {
        return {
            width: "100%",
            height: "500px",
            nodes: nodes,
            scrollableAreaValue: 'Limited',
            scrollableArea: data,
            //scrollableAreaChange: onScrollableAreaChange,
            rulerSettings: { showRulers: true },
            // set the autoScrollBorder
            scrollSettings: {
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
            },
        }
    },
    methods: {
      // Method to update scroll limit based on dropdown selection
      onScrollableAreaChange(args) {
          const diagramInstance = this.$refs.diagram.ej2Instances;
          diagramInstance.scrollSettings.scrollLimit = args.itemData.shape;
          diagramInstance.dataBind();
      }
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>
