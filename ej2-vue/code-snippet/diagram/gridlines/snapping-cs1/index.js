
    import Vue from 'vue';
    import { DiagramPlugin,SnapConstraints,Snapping,Diagram } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    Diagram.Inject(Snapping);
    let nodes = [{
        id: 'node1',
        style:{fill:'#6BA5D7',strokeColor:'#6BA5D7'},
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
    }]
    let snapSettings = {
    // Enables the object to snap with both horizontal and Vertical gridlines
    constraints: SnapConstraints.SnapToLines | SnapConstraints.ShowLines
    }
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :snapSettings='snapSettings' ></ejs-diagram>
    </div>
`,

        name: 'app',
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                snapSettings:snapSettings
            }
        }
    
});