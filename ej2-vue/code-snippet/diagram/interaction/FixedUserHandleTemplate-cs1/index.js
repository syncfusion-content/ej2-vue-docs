import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [{
    id:"node1",
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    style: { strokeColor: '#64Abbb', strokeWidth: 3 },
    // A fixed user handle is created and stored in fixed user handle collection of Node.
     fixedUserHandles: [{ offset: { x: 0, y: 0 }, margin: { right: 20 }, width: 50, height: 20, id: 'usercon1' }]
}];

let connectors = [{
    id: "connector1",
       style: { strokeColor: '#64Abbb', strokeWidth: 3 },
       sourcePoint: {
           x: 400,
           y: 200
       },
       targetPoint: {
           x: 500,
           y: 300
       }, type: 'Orthogonal',
       fixedUserHandles: [{ offset: 0.5, width: 120, alignment: 'Before', height: 20, id: 'usercon2', displacement: { x: 10, y: 10 } }]
}];

let itemVue = Vue.component("fixedUserHandleTemplate", {
template: ` 
    <div v-if="data.id == 'usercon1'">
        <div style="width:100%;height:100%">
            <input id="colorPicker" type="color" value="#008000"/>
        </div>
    </div>
    <div v-else-if="data.id=='usercon2'">
        <div style="width:100%;height:100%">
            <input type="button" value="FixedUserHandleTemplate" style="color:red; "/>
        </div>
    </div> `,
data() {
  return {};
}
});

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :fixedUserHandleTemplate="fixedUserHandleTemplate"></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
            fixedUserHandleTemplate: function()
            {
                return { template: itemVue };
            },
        };
    },
    mounted: function() {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        colorPicker.addEventListener('change', (event) => {
            let currentColor  = event.target.value;
            diagramInstance.nodes[0].style.fill = currentColor; 
        });
        
    }

});