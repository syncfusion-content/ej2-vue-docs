import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
import { NodeConstraints, SnapConstraints, DiagramConstraints } from '@syncfusion/ej2-diagrams';

Vue.use(DiagramPlugin);

const nodes = [
    {
        id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 200, style: { fill: '#cornflowerblue' },
        constraints: NodeConstraints.Default &
            ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)

    },
    {
        id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 200, style: { fill: 'cornflowerblue' },
        constraints: NodeConstraints.Default &
            ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)
    },
];
// Enable AutomaticPortCreation
const constraints = DiagramConstraints.Default | DiagramConstraints.AutomaticPortCreation;
const snapSettings = { constraints: SnapConstraints.None };

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-diagram id="diagram" width="100%" height="500px" :nodes="nodes"
        :constraints="constraints" :snapSettings="snapSettings"></ejs-diagram>
    </div>
    `,
    data() {
        return {
            nodes: nodes,
            constraints: constraints,
            snapSettings: snapSettings
        }
    },
});
