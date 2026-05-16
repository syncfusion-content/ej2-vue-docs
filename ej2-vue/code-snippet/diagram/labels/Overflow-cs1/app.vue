<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  // Position of the node
  offsetX: 100,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Clip Wrap',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Clip', textWrapping: 'Wrap' },
    },
  ],
},
{
  // Position of the node
  offsetX: 300,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Clip NoWrap',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Clip', textWrapping: 'NoWrap' },
    },
  ],
},
{
  // Position of the node
  offsetX: 500,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Clip WrapWithOverflow',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Clip', textWrapping: 'WrapWithOverflow' },
    },
  ],
},

{
  // Position of the node
  offsetX: 100,
  offsetY: 300,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Ellipsis Wrap',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Ellipsis', textWrapping: 'Wrap' },
    },
  ],
},
{
  // Position of the node
  offsetX: 300,
  offsetY: 300,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Ellipsis NoWrap',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Ellipsis', textWrapping: 'NoWrap' },
    },
  ],
},
{
  // Position of the node
  offsetX: 500,
  offsetY: 300,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Ellipsis WrapWithOverflow',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Ellipsis', textWrapping: 'WrapWithOverflow' },
    },
  ],
},

{
  // Position of the node
  offsetX: 100,
  offsetY: 700,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Wrap Wrap',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Wrap', textWrapping: 'Wrap' },
    },
  ],
},
{
  // Position of the node
  offsetX: 300,
  offsetY: 500,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Wrap NoWrap',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Wrap', textWrapping: 'NoWrap' },
    },
  ],
},
{
  // Position of the node
  offsetX: 500,
  offsetY: 700,
  // Size of the node
  width: 100,
  height: 100,
  annotations: [
    {
      content: 'Wrap WrapWithOverflow',
      offset: { x: 0.5, y: 1.4 },
    },
    {
      content:
        'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
      style: { textOverflow: 'Wrap', textWrapping: 'WrapWithOverflow' },
    },
  ],
}];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
        }
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
