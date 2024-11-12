
import Vue from 'vue';
import { DiagramPlugin, NodeConstraints} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
var nodes = [{
  // Position of the node
  offsetX: 250,
  offsetY: 150,
  // Size of the node
  width: 100,
  height: 100,
style: { fill: '#6BA5D7', strokeColor: 'white' },
  constraints: NodeConstraints.Default | NodeConstraints.Shadow,
  shadow: {angle: 50, opacity: 0.8, distance: 9}
      }];

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

  name: 'app',
    data() {
    return {
      width: "100%",
      height: "700px",
      nodes: nodes,
    }
  }

});