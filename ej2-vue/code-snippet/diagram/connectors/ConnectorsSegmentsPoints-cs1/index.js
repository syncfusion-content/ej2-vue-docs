
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
    id: "connector1",
    type: 'Straight',
    segments: [{
        // Defines the segment type of the connector
        type: 'Straight'
    }],
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
`,
    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors
        }
    }

});