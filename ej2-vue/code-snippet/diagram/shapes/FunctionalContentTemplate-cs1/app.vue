<template>
<div id="app">
  <!-- Diagram Component -->
  <ejs-diagram
    id="diagram"
    :width="width"
    :height="height"
    :nodes="nodes"
  ></ejs-diagram>
</div>
</template>

<script>
// Import the necessary components from Syncfusion Vue Diagrams
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

// Define the template method separately
function template(nodeId) {
let background = "#6BA5D7";
let name = "button";
if (nodeId === "node1") {
  background = "yellow";
  name = "YELLOW";
} else {
  name = "BLUE";
}
return `<div style="background:${background};height:100%;width:100%;">
          <button type="button" style="width:100px"> ${name}</button>
        </div>`;
}

// Define the nodes outside the Vue component
const nodes = [
{
  id: "node1",
  offsetX: 250,
  offsetY: 250,
  width: 100,
  height: 100,
  style: { fill: "#6BA5D7", strokeColor: "white" },
  shape: {
    type: "HTML",
    content: template("node1"), // Generate dynamic content
  },
},
{
  id: "node2",
  offsetX: 450,
  offsetY: 250,
  width: 100,
  height: 100,
  style: { fill: "#6BA5D7", strokeColor: "white" },
  shape: {
    type: "HTML",
    content: template("node2"), // Generate dynamic content
  },
},
];

export default {
name: "App",
components: {
  "ejs-diagram": DiagramComponent, 
},
data() {
  return {
    width: "100%",
    height: "500px",
    nodes: nodes, 
  };
},
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
