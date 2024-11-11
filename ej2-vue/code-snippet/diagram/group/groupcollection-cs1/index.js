import Vue from 'vue';
import { DiagramPlugin } from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);

const group = [
    { id: "rectangle1", offsetX: 100, offsetY: 100, width: 100, height: 100, annotations: [{ content: "node1" }] },
    { id: "rectangle2", offsetX: 200, offsetY: 200, width: 100, height: 100, annotations: [{ content: "node2" }] },
    { id: "group", children: ["rectangle1", "rectangle2"] },
    { id: "rectangle3", offsetX: 400, offsetY: 400, width: 100, height: 100, annotations: [{ content: "node1" }] },
    { id: "rectangle4", offsetX: 500, offsetY: 500, width: 100, height: 100, annotations: [{ content: "node2" }] },
    { id: "group2", children: ["rectangle3", "rectangle4"], padding: { left: 10, right: 10, top: 10, bottom: 10 } },
];

new Vue({
    el: '#app',
    template: `
    <div id="app">
      <ejs-diagram ref="diagramRef" id="diagram" width="100%" height="580px" />
    </div>
  `,
    mounted() {
        const diagramInstanace = this.$refs.diagramRef.ej2Instances;
        diagramInstanace.addElements(group);
    },
});
