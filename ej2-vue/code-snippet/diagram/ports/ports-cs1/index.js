
import Vue from 'vue';
import { DiagramPlugin, PortVisibility, PointPortModel } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    // Initialize port collection
    ports: [{
        id: 'port1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
}]

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