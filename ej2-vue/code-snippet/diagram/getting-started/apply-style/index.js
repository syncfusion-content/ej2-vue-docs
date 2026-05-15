
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
    {
        id: "node1",
        height: 60,
        width: 100,
        offsetX: 200,
        offsetY: 100,
        shape: { type: 'Flow', shape: 'Terminator'},
        style:{ fill:'red', strokeColor:'green', strokeWidth:5, strokeDashArray:'2,2' },
        borderWidth: 10,
        borderColor: 'orange',
        annotations: [{content: 'Start '}]
    }
];

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'></ejs-diagram>
</div>
`,

name: 'app',
    data () {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    }

});