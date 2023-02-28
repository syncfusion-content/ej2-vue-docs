
    import Vue from 'vue';
    import { DiagramPlugin ,NodeModel,ConnectorModel} from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
            id: 'node1',
            width: 90,
            height: 60,
            offsetX: 100,
            offsetY: 100,
            style: {
                fill:   '#6BA5D7',
                strokeColor: 'white',
                strokeWidth: 1
            },
        },
        {
            id: 'node2',
            width: 90,
            height: 60,
            offsetX: 240,
            offsetY: 100,
            style: {
                fill:   '#6BA5D7',
                strokeColor: 'white',
                strokeWidth: 1
            },
        },
        {
            id: 'node3',
            width: 90,
            height: 60,
            offsetX: 170,
            offsetY: 150,
            style: {
                fill:   '#6BA5D7',
                strokeColor: 'white',
                strokeWidth: 1
            },
        }
    ];
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            let selArray: (NodeModel | ConnectorModel)[] = [];
            selArray.push(diagramInstance.nodes[0], diagramInstance.nodes[1], diagramInstance.nodes[2]);
            //Selects the nodes
            diagramInstance.select(selArray);
            //Distributes space between the nodes
            diagramInstance.distribute('RightToLeft', diagramInstance.selectedItems.nodes);
        }
    
});