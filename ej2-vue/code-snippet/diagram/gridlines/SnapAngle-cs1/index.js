import Vue from 'vue';
import { DiagramPlugin, SnapConstraints, Snapping, Diagram } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
Diagram.Inject(Snapping);
let nodes = [{
    id: 'node1',
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
}]
let snapSettings = {
    snapAngle: 20,
}
new Vue({
    el: '#app',
    template: `
    <div id="app">
        <label> Angle :</label>
        <input type="number" max="360" min="5" value="20" @change="Angle($event)" />
            <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'
                :snapSettings='snapSettings'></ejs-diagram>
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            snapSettings: snapSettings
        }
    },
    methods: {
        Angle: function (args) {
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.snapSettings.snapAngle = Number(args.target.value);
            diagramInstance.dataBind();
        },
    }

});