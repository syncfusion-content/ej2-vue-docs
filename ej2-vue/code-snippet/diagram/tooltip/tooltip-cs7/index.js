
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
        }],
         // Initialize port collection
         ports: [{
            // Sets the position for the port
            offset: {
                x: 1,
                y: 0.5
            },
            visibility: PortVisibility.Visible,
            shape: 'Circle',
            tooltip: {content: 'Port Tootip', relativeMode: 'Object', position: 'TopRight'},
            constraints: PortConstraints.Default | PortConstraints.ToolTip
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
                nodes: nodes,
            }
        }
    
});