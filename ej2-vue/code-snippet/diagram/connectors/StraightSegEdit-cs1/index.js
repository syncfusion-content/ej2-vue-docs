    import Vue from 'vue';
    import { DiagramPlugin ,ConnectorConstraints ,ConnectorEditing,Diagram} from '@syncfusion/ej2-vue-diagrams';
    Diagram.Inject(ConnectorEditing);
    Vue.use(DiagramPlugin);
    let connectors = [{
    id: "connector1",
    type: 'Straight',
    constraints:
    ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    segments: [{
        // Defines the segment type of the connector
        type: 'Straight',
         // Defines the point of the segment
         point: {
            x: 100,
            y: 150,
          },
    }],
    sourcePoint: {
        x: 150,
        y: 100
    },
    targetPoint: {
        x: 340,
        y: 200
    }
}]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="editSegment">editSegment</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
`,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
            diagramInstance: null
        }
    },
    mounted: function () {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.select([diagramInstance.connectors[0]]);
    },
    methods :{
    editSegment () {
        let diagramInstance;
        let diagramObj = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        let options = {};
        options.SegmentEditing = 'Toggle';
        options.point = { x: 220, y: 150 };
        options.connector =diagramInstance.connectors[0];
        options.hitPadding = diagramInstance.connectors[0].hitPadding;
        diagramInstance.editSegment(options);
    }
    }
});