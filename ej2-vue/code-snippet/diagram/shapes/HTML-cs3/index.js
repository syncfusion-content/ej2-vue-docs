
import Vue from "vue";
import { DiagramPlugin, AnnotationConstraints } from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);


let itemVue  = Vue.component("nodeTemplate", {
  template: `<div style="background:#6BA5D7;height:100%;width:100%;"><button type="button" style="width:100px"> Button</button></div> `,
  data() {
    return {};
  }
});

let nodes = [
  {
    //Id of the node
    id: "Node",
    //Position of the node
    offsetX: 250,
    offsetY: 250,
    //Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as HTML
    shape: {
      type: "HTML",
    },
  },
];

;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-diagram
    ref="diagram"
      id="diagram"
      :width='width'
      :height='height'
      :nodes = "nodes"
      :nodeTemplate="nodeTemplate"
    >
   
    </ejs-diagram>
  </div>
`,

  name: "app",
  data() {
    return {
      width: "100%",
      height: "500px",
      nodes: nodes,
      nodeTemplate: function () {
        return { template: itemVue };
       },
    };
  },
  methods: {
},

});