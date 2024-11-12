
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
  // Position of the node
  offsetX: 250,
  offsetY: 150,
  // Size of the node
  width: 100,
  height: 100,
  visible: true,
   //Sets the rotation angle of the node
   rotateAngle:45,
   //Sets the corner radius of the node
   shape:{cornerRadius:15}
  // Text(label) added to the node
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