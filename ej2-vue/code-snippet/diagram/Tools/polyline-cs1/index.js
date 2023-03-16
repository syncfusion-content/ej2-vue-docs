
    import Vue from 'vue';
    import { DiagramPlugin ,DiagramTools,ConnectorModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                getNodeDefaults: (obj) => {
            obj.height = 15;
            obj.width = 15;
            obj.borderWidth = 1;
            obj.style = {
                fill: '#6BA5D7',
                strokeWidth: 2,
                strokeColor: '#6BA5D7'
                };
            return obj;
            },
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        //JSON to create a polyline
        let connector: ConnectorModel = { id: 'connector1', type: 'Polyline'};
        diagramInstance.drawingObject = connector;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
    }

});