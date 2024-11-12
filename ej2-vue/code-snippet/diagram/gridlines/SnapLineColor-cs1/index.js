import Vue from 'vue';
import { DiagramPlugin, Snapping, Diagram } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
Diagram.Inject(Snapping);
let nodes = [{
    id: 'node1',
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
}, {
    id: 'node2',
    width: 100,
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
    height: 100,
    offsetX: 300,
    offsetY: 100,
},]
let snapSettings = {
    snapLineColor: '#14AF41',
}

new Vue({
    el: '#app',
    template: `
    <div id="app">
    <label>SnapColor</label>
      <input type="color" value="#14AF41" @change="SnapColor($event)" />
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
    },methods:{
        SnapColor:function (args){
            let diagramInstance;
            let diagramObj = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.snapSettings.snapLineColor = args.target.value;
            diagramInstance.dataBind();
        },
    }

});