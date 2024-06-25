import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    const nodes = [
    {id: 'node1', offsetX: 140, offsetY: 250,annotations: [{ content: 'node1' }] },
    { id: 'node1', offsetX: 250, offsetY: 250 ,annotations: [{ content: 'node2' }]},
    { id: 'node3', offsetX: 360, offsetY: 250 ,annotations: [{ content: 'node3' }]}
    ];
    
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
            getNodeDefaults: (node) => {
                node.height = 100;
                node.width = 100;
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            }
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
       //Add collection of nodes
       diagramInstance.addElements(nodes)
    }

});