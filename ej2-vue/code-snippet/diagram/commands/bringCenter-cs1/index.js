
import Vue from 'vue';
import { DiagramPlugin ,Rect,} from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let diagramInstance;

let nodes = [  {
    id: "node1",
    offsetX: 1000,
    offsetY: 100,
    width: 70,
    height: 40,
  },];

new Vue({
el: '#app',
template: `
<div id="app">
    <button @click="bringToCenter">Bring To Center</button>
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "700px",
            height: "350px",
            nodes: nodes,
            scrollSettings: {
                scrollLimit: 'Infinity',
              },

        }
    },
    methods: {
        bringToCenter: function () {
            let nodeBounds = diagramInstance.nodes[0].wrapper.bounds;
            let bounds = new Rect(
              nodeBounds.x,
              nodeBounds.y,
              nodeBounds.width,
              nodeBounds.height
            );
            /**
             * parameter - bounds of region to bring into view
             */
            diagramInstance.bringToCenter(bounds);
        },

    },
    mounted() {
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
 
    }

});