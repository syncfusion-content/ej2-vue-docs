
import Vue from 'vue';
import { DiagramPlugin, DiagramContextMenu, Diagram } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(DiagramContextMenu);
Vue.use(DiagramPlugin);
import { L10n, setCulture } from '@syncfusion/ej2-base';
// Set the default culture to German
setCulture('de')

// Load locale text for the diagram context menu
L10n.load({
    'de-DE': {
        diagram: {
            Cut: 'Corte',
            Copy: 'Copia',
            Paste: 'Pasta',
            Undo: 'Deshacer',
            Redo: 'Rehacer',
            SelectAll: 'Seleccionar todo',
            Grouping: 'Agrupación',
            Group: 'Grupo',
            Ungroup: 'Desagrupar',
            Order: 'Fin',
            BringToFront: 'Traer a delante',
            MoveForward: 'Movimiento adelante',
            SendToBack: 'Enviar a espalda',
            SendBackward: 'Enviar hacia atrás',
        },
    },
});
let nodes = [{
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
    }]
    },
    {
    id: 'node2',
    offsetX: 300,
    offsetY: 100,
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
    
    }]
    }];

new Vue({
    el: '#app',
    template: `
    <div id="app">
          <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' 
     :contextMenuSettings='contextMenuSettings' :getNodeDefaults='getNodeDefaults' locale='de-DE'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            getNodeDefaults: (node) => {
                node.height = 100;
                node.width = 100;
                node.shape = { type: 'Basic', shape: 'Ellipse' }
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            },
            contextMenuSettings: {
                show: true,
            }
        }
    }

});