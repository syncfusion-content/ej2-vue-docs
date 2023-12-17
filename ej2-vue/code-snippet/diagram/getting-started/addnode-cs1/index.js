
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
let nodes = [
    {
        id: "node1",
        height: 60,
        offsetX: 300,
        offsetY: 80,
        annotations: [
            {
                content: "start"
            }
        ]
    }
]

new Vue({
el: '#app',
template: `
<div id="app">
    <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
</div>
`,

    name: 'app'
    data () {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    }

});