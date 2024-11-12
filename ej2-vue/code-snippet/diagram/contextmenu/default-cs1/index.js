
import Vue from 'vue';
import { DiagramPlugin,DiagramContextMenu,Diagram,DiagramBeforeMenuOpenEventArgs } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(DiagramContextMenu);
Vue.use(DiagramPlugin);

let nodes = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
    }]
},
{
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
    }]
}];
let connectors = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Straight',
} ]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :contextMenuSettings='contextMenuSettings'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            connectors: connectors,
            contextMenuSettings: {
                //Enables the context menu
                show: true,
            }
        }
    }

});