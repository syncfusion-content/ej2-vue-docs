import Vue from 'vue';
import { DiagramPlugin, NodeModel } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [{
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    shape: {
        type: 'Native',
        scale: 'Stretch'
    }
}];

// Template for the SVG Shape.
let itemVue = createApp({}).component("nodeTemplate", {
    template: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="#007BFF"/>
                <path d="M6.5 7.5L17.5 16.5L12 21V3L17.5 7.5L6.5 16.5" fill="none" stroke="white" stroke-width="2"/>
              </svg>`,
    data() {
        return {};
    }
});

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
            height: "500px",
            nodes: nodes,
            nodeTemplate: function () {
              return { template: SVGTemplate };
            }
        };
    }
});