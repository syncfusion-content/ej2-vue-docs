import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    fixedUserHandles: [
        {
            id: 'color',
            pathData:
                'M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z ',
            width: 20,
            height: 20,
        },
    ],
}]

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' @fixedUserHandleClick="fixedUserHandleClick"></ejs-diagram>
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

    methods: {
        fixedUserHandleClick: function(event) {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            let node = event.element;
            node.style.fill = node.style.fill === '#64A6' ? '#64Abbb' : '#64A6';
            diagramInstance.dataBind();
        }
    }

});