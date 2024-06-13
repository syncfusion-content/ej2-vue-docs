
    import Vue from 'vue';
    import { DiagramPlugin,NodeModel ,MoveTool,BasicShapeModel,UserHandleModel,randomId,NodeConstraints, DiagramConstraints,cloneObject} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let diagramInstance: Diagram;
    let nodes = [{
        id: 'node',
    // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        tooltip: { content: 'node1', position: 'BottomRight', relativeMode: 'Object' },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        fixedUserHandles: [{tooltip: { content: 'handle1', position: 'BottomRight', relativeMode: 'Object' }, offset: { x: 0, y: 0 },margin: { right: 20 }, width: 20, height: 20, id: 'user1', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'  :constraints='constraints'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
            }
        },
});