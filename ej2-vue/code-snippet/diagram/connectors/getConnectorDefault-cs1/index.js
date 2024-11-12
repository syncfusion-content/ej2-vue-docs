
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
    id: 'connector1',
    sourcePoint: {
        x: 100,
        y: 100,
    },
    targetPoint: {
        x: 200,
        y: 200,
    },
    },{
    id: 'connector2',
    sourcePoint: {
        x: 300,
        y: 100,
    },
    targetPoint: {
        x: 400,
        y: 200,
    },
    }]
 
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
    </div>
`,

     name: 'app',
     data() {
         return {
             width: "100%",
             height: "350px",
             connectors: connectors
             ,getConnectorDefaults: (connector) => {
                connector.targetDecorator.style.fill = '#6BA5D7';
                connector.targetDecorator.style.strokeColor = '#6BA5D7';
                connector.style.strokeColor = 'red';
                connector.sourceDecorator.shape = 'Circle';
                return connector;
            }
         }
     }
 
});