import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

let nodes = [{
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    height: 100,
    width: 100
}];
let handles = [{
    name: 'clone',
    pathData:
      'M0,3.42 L1.36,3.42 L1.36,12.39 L9.62,12.39 L9.62,13.75 L1.36,13.75 C0.97,13.75,0.65,13.62,0.39,13.36 C0.13,13.1,0,12.78,0,12.39 Z M4.13,0 L12.39,0 C12.78,0,13.1,0.13,13.36,0.39 C13.62,0.65,13.75,0.97,13.75,1.36 L13.75,9.62 C13.75,10.01,13.62,10.33,13.36,10.6 C13.1,10.87,12.78,11.01,12.39,11.01 L4.13,11.01 C3.72,11.01,3.39,10.87,3.13,10.6 C2.87,10.33,2.74,10.01,2.74,9.62 L2.74,1.36 C2.74,0.97,2.87,0.65,3.13,0.39 C3.39,0.13,3.72,0,4.13,0 Z ',
    //Alignment options
    offset: 1,
    side: 'Bottom',
    horizontalAlignment: 'Left',
    verticalAlignment: 'Bottom',
    margin: { left: 5, bottom: 10 },
}];

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :selectedItems='selectedItems' @onUserHandleMouseDown="onUserHandleMouseDown"></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            //Define user handles in selectedItems property
            selectedItems: {
                userHandles: handles
            },

        }
    },

    methods: {
        onUserHandleMouseDown: function(event) {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            if (event && event.element) {
                //To clone the selected node
                diagramInstance.copy();
                diagramInstance.paste();
            }
        }
    },


});