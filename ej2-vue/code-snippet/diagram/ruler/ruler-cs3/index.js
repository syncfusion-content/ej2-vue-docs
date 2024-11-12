
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);


let nodes = [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
    },
];
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :rulerSettings='rulerSettings' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            rulerSettings: {
                showRulers: true,
                horizontalRuler: { interval: 10, segmentWidth: 50, thickness: 50, orientation: 'Horizontal', arrangeTick: this.arrangeTicks },
                verticalRuler: { interval: 20, segmentWidth: 200, thickness: 20, tickAlignment: "LeftOrTop", markerColor: 'blue', }
            }
        }
    },
    methods: {
        arrangeTicks(args) {
            if (args.tickInterval % 10 === 0) {
                args.tickLength = 25;
            }
        }
    }


});