
    import Vue from 'vue';
    import { DiagramPlugin ,DiagramTools,BasicShapeModel,ConnectorModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "700px",
            }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        let connectors: ConnectorModel = {
            id: 'connector1',
            type: 'Freehand'
        }
        diagramInstance.drawingObject = connectors;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.ContinuousDraw;
        diagramInstance.dataBind();
    }

});