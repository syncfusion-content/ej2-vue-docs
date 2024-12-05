import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
  {
    id:'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    zIndex:2,
    annotations:[{content:'Node1'}],
    style:{fill:'white',strokeColor:'black'}

  },
  {
    id:'node2',
    // Position of the node
    offsetX: 270,
    offsetY: 270,
    // Size of the node
    width: 100,
    height: 100,
    zIndex:1,
    annotations:[{content:'Node2'}],
    style:{fill:'white',strokeColor:'black'}
  },
  ];

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults' ></ejs-diagram>
</div>
`,

name: 'app',
data() {
    return {
        width: "100%",
        height: "700px",
        nodes: nodes,
        getNodeDefaults: (obj) => {
          obj.style = {fill:'yellow',strokeColor:'green',strokeWidth:3}
        },
    }
}

});