
    import Vue from 'vue';
    import { DiagramPlugin,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: "node1",
        height: 60,
        offsetX: 300,
        offsetY: 80,
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
         //Defines mouse over tooltip for a node
         tooltip: {
            content: 'Node1',
            //Sets the alignment properties
            position: 'BottomRight',
            //Sets to show tooltip around the element
            relativeMode: 'Object',
        },
        annotations: [{
            content: "start"
        }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        ></ejs-diagram>
    </div>
`,
        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
            }
        }
    
});