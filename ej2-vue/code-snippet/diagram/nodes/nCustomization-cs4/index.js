
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let linearGradient = {
  //Start point of linear gradient
 x1: 0, y1: 0,
//End point of linear gradient
x2: 50, y2: 50,
//Sets an array of stop objects
   stops: [{ color: 'white', offset: 0 },
   { color: '#6BA5D7', offset: 100 }],
   type: 'Linear'
};
let radialGradient = {
   //Center point of outer circle
   cx: 50, cy: 50, 
   //Center point of inner circle
   fx: 25, fy: 25,
   //Radius of a radial gradient
    r: 50,
     //Sets an array of stop objects
   stops: [{ color: 'white', offset: 0 },
   { color: '#6BA5D7', offset: 100 }],
   type: 'Radial'
};


let nodes = [{
// Position of the node
offsetX: 200,
offsetY: 250,
// Size of the node
width: 100,
height: 100,
style: {gradient: linearGradient, strokeColor: 'white' }
// Text(label) added to the node
},{
// Position of the node
offsetX: 350,
offsetY: 250,
// Size of the node
width: 100,
height: 100,
style: {gradient: radialGradient, strokeColor: 'white' }
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