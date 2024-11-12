import Vue from 'vue';
import { OverviewPlugin, SnapConstraints, DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);
Vue.use(OverviewPlugin);
let nodes = [{
    id: 'node1', 
    offsetX: 400, 
    offsetY: 400,
    height: 100,
    width: 200 
}]
/**
* Overview
*/

new Vue({
    el: '#app',
    template: `
    <div id="app" style="width: 100%; display: flex">
        <ejs-diagram id="diagram" :width='width' :height='height'  :nodes='nodes'  style="flex: 7;" :snapSettings='snapSettings' :scrollSettings='scrollSettings'></ejs-diagram>
        <div style="flex: 3;height: 250px;padding: 0px;right: 30px;bottom: 20px;border: #eeeeee;border-style: solid;box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);background: #f7f7f7;">
            <ejs-overview id="overview"  :sourceID='overviewsourceID' :width='overviewwidth' :height='overviewheight'></ejs-overview>
        </div>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "590px",
            nodes: nodes,
            snapSettings: {
                constraints: SnapConstraints.None 
            },
            scrollSettings: { scrollLimit: 'Diagram' },
            overviewsourceID: "diagram",
            overviewwidth: "300px",
            overviewheight: "150ppx",
        }
    },
   

});