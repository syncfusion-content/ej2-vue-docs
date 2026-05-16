<template>
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent, BpmnDiagrams,NodeConstraints} from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id: 'subProcess',
  width: 520,
  height: 250,
  offsetX: 355,
  offsetY: 230,
  constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
  shape: {
    shape: 'Activity',
    type: 'Bpmn',
    activity: {
      activity: 'SubProcess',
      subProcess: {
        collapsed: false,
      },
    },
  },
}]

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
    },
    provide: {
        diagram: [BpmnDiagrams]
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
