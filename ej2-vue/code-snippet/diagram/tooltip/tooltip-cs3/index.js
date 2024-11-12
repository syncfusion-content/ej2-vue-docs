
    import Vue from 'vue';
    import { DiagramPlugin,DiagramConstraints,NodeConstraints } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: "node1",
        height: 100,
        width:100,
        offsetX: 300,
        offsetY: 80,
        annotations: [{
            content: "start"
        }],
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        tooltip: {
        //Sets the content of the Tooltip
        content: getContent(),
        //Sets the position of the Tooltip
        position: 'TopLeft',
        //Sets the tooltip position relative to the node
        relativeMode: 'Object'
        },
    }]
    function getContent() {
        let tooltipContent = document.createElement('div');
        tooltipContent.innerHTML = '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> <span style="margin: 10px;"> Tooltip !!! </span> </div>';
        return tooltipContent;
    }
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
          :constraints='constraints'></ejs-diagram>
    </div>
`,

        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
                constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
                nodes: nodes,
            }
        }
    
});