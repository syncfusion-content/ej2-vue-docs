import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
  {
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
  {
    id: 'node2',
    offsetX: 500,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
];
let connectors = [
  {
    // Name of the connector
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
  },
];
new Vue({
	el: '#app',
	template: `
    <div id="app">
       <ejs-diagram id="diagram" :width='width' :height='height' :connectors='connectors' :nodes='nodes' :connectionChange ='connectionChange' ></ejs-diagram>
    </div>
`,
name: 'app',
data() {
    return {
        width: "100%",
        height: "350px",
        connectors: connectors,
        nodes:nodes,
        connectionChange  : (args) => {
          if (args.state === 'Changed') {
            console.log('connectionChange ');
             //Customize
          }
      },
    }
},
});