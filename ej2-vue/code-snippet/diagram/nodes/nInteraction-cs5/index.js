
    import Vue from 'vue';
    import { DiagramPlugin,FlipDirection } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
    flip:FlipDirection.Horizontal,
     shape: {
        type: 'Basic',
        shape: 'RightTriangle',
    },  
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
}]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.select([diagramInstance.nodes[0]]);
    }

});