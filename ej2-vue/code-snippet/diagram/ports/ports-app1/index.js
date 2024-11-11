
import Vue from 'vue';
import { DiagramPlugin, PortVisibility, PointPortModel } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
        {
            offset: { x: 1, y: 0.5 },
            visibility: PortVisibility.Visible,
            style: {
                fill: 'red',
                strokeWidth: 2,
                strokeColor: 'black',
                opacity: 0.7,
                strokeDashArray: '2 2',
            },
            width: 12,
            height: 12,
            shape: 'Circle',
        }
    ]
}];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },

});