
    import Vue from 'vue';
    import { DiagramPlugin,DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: "node1",
        height: 60,
        offsetX: 300,
        offsetY: 80,
        annotations: [{
            content: "start"
        }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        :tooltip='tooltip'  :constraints='constraints'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
                nodes: nodes,
                //Defines mouse over tooltip for a node
                tooltip: {
                    //Sets the content of the Tooltip
                    content: 'Node1',
                    //Sets the position of the Tooltip
                    position: 'BottomRight',
                    //Sets the tooltip position relative to the node
                    relativeMode: 'Object'
                },
            }
        }
    
});