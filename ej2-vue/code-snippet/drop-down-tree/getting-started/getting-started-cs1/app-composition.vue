<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdowntree id='dropdowntree' :fields='fields'></ejs-dropdowntree>
    </div>
  </div>
</template>

<script setup>
import { DropDownTreeComponent as EjsDropdowntree } from "@syncfusion/ej2-vue-dropdowns";

let data = [
  {
    nodeId: '01', nodeText: 'Music',
    nodeChild: [
      { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
    ]
  },
  {
    nodeId: '02', nodeText: 'Videos', expanded: true,
    nodeChild: [
      { nodeId: '02-01', nodeText: 'Naturals.mp4' },
      { nodeId: '02-02', nodeText: 'Wild.mpeg' },
    ]
  },
  {
    nodeId: '03', nodeText: 'Documents',
    nodeChild: [
      { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
      { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
      { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
      { nodeId: '03-04', nodeText: 'Social Network.pdf' },
      { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
    ]
  }];

const fields = { dataSource: data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material3.css";
</style>
