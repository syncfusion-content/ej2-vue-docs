import Vue from 'vue';
import { DiagramPlugin, NodeModel } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

// Template for the HTML Shape.
let itemVue = createApp({}).component("nodeTemplate", {
    template: `<div style="background:#6BA5D7;height:100%;width:100%;"><button type="button" style="width:100px"> Button</button></div> `,
    data() {
        return {};
    }
});

let nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    shape: {
        type: 'HTML',
        content: function () {
            return { template: itemVue };
        }
    }
}];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
    `,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "500px",
            nodes: nodes,
        }
    }
});