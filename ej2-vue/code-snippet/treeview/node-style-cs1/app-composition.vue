<template>
  <ejs-treeview id='treeview' :fields='fields'></ejs-treeview>
</template>

<script setup>
  import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";

  const data =  [
    {
        nodeId: '01', nodeText: 'Music',
        htmlAttributes: { class: 'child-node' },
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
    },
  ];
  const fields = { dataSource: data, id: "nodeId", text: "nodeText", child: "nodeChild", htmlAttributes: "htmlAttributes" };

</script>

<style>
.child-node {
        font-weight: bold;
        background-color: aqua;
    }
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  
</style>