
    import Vue from 'vue';
    import { DiagramPlugin,ConnectorConstraints,ConnectorEditing } from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(ConnectorEditing);
    Vue.use(DiagramPlugin);
    let connectors = [{
    id = 'connector',
    // Define the type of the segment
    type = 'Orthogonal';
    sourcePoint = { x: 250, y: 250 };
    targetPoint = { x: 350, y: 350 };
    segments = [
    {
        type: 'Orthogonal',
        // Defines the direction for the segment lines
        direction: "Right",
        // Defines the length for the segment lines
        length: 70
    },
    {
        type: 'Orthogonal',
        direction: "Bottom",
        length: 20
        }];
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height'
        :connectors='connectors'
        :getConnectorDefaults='getConnectorDefaults' >
        </ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "900px",
                height: "500px",
                connectors: [connector2],
                getConnectorDefaults:(connector)=>{
                connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
                }
            }
        }
    
});