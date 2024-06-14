
import Vue from 'vue';
import { DiagramPlugin,PointPortModel,PortVisibility,PortConnectionDirection } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let port1: PointPortModel = {
style: {
    strokeColor: 'black',
    fill: '#yellow'
    }
}
port1.shape = 'Square';
port1.visibility = PortVisibility.Visible;
 // Specify the connection Direction
port1.connectionDirection='Right';
port1.id = 'port1';
port1.offset = {
    x: 0.5,
    y: 0.5
};
let port2: PointPortModel = {
    style: {
        strokeColor: 'black',
        fill: 'yellow'
    }
};
port2.offset = {
    x: 0,
    y: 0
};
port2.id = 'port2';
port2.visibility = PortVisibility.Visible;
 // Specify the connection Direction

port2.connectionDirection='Left';
port2.shape = 'Square';

let nodes = [{
    id: 'node',
    width: 100,
    height: 100,
    offsetX: 600,
    offsetY: 300,
    ports: [port1]
},
{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 800,
    offsetY: 300,
    ports: [port2]
},
];
let connectors = {
id: "connector1",

type: 'Orthogonal',

sourceID: 'node',
targetID: 'node1',
sourcePortID: 'port1',
targetPortID: 'port2'
}

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' ></ejs-diagram>
</div>
`,

name: 'app'
data() {
    return {
        width: "100%",
        height: "350px",
        nodes: nodes,
        connectors: [connectors],
        getNodeDefaults: (node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        },
    }
}

});