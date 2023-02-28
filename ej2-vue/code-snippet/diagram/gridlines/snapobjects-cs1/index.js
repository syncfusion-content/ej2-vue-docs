
    import Vue from 'vue';
    import { DiagramPlugin,SnapSettingsModel,SnapConstraints,Snapping,Diagram } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    Diagram.Inject(Snapping);
    let nodes = [{
        id: 'node1',
        style:{fill:'#6BA5D7',strokeColor:'#6BA5D7'},
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100
        },
        {
        id: 'node2',
        style:{fill:'#6BA5D7',strokeColor:'#6BA5D7'},
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100
    }]
    let snapSettings: SnapSettingsModel = {
    // Enable snap to object constraint
    constraints: SnapConstraints.SnapToObject|SnapConstraints.ShowLines,
    // Sets the Snap object distance
    snapObjectDistance: 10,
    // Snap Angle for object
    snapAngle: 10,
    // Set the Snapline color
    snapLineColor: 'red'
    }
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        :snapSettings='snapSettings' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                snapSettings:snapSettings,
                nodes: nodes,
            }
        }
    
});