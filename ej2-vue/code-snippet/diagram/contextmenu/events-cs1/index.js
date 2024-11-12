
import Vue from 'vue';
import { DiagramPlugin, DiagramContextMenu, Diagram } from '@syncfusion/ej2-vue-diagrams';
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
}]

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :connectors='connectors' :contextMenuSettings='contextMenuSettings' :contextMenuOpen="contextMenuOpen"
      :contextMenuBeforeItemRender="contextMenuBeforeItemRender" :contextMenuClick="contextMenuClick"></ejs-diagram>
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
                show: true,
                items: [
                    {
                        text: "menu item 1",
                        id: "item1",
                    },
                    {
                        text: "menu item 2",
                        id: "item2",
                    },
                ],
                showCustomMenuOnly: true,
            },
            contextMenuBeforeItemRender: (args) => {
                //Triggers for each menu item
                console.log("context menu before item render");
            },
            contextMenuOpen: (args) => {
                //Triggers when the menu is openned
                console.log("context menu openned");
            },
            contextMenuClick: (args) => {
                //Triggers when the item is clicked
                console.log("context menu clicked");
            },
        }
    }

});