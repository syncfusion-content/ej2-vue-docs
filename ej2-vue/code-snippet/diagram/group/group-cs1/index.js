
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: "rectangle1",
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        annotations: [{
            content: 'rectangle1'
        }]
    },
    {
        id: "rectangle2",
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        annotations: [{
            content: 'rectangle2'
        }]
    },
    {
        id: "rectangle3",
        offsetX: 400,
        offsetY: 300,
        width: 100,
        height: 100,
        style: {
            fill: 'darkCyan',
            strokeWidth: 2
        },
        annotations: [{
            content: 'rectangle2'
        }]
    }
    // Grouping node 1 and node 2 into a single group
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2'],
        padding:{left:10,right:10,top:10,bottom:10}
    }
]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :getNodeDefaults='getNodeDefaults' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
            getNodeDefaults: (node) => {
                node.height = 100;
                node.width = 100;
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            },
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        diagramInstance.selectAll();
        // Adding the third node into the existing group
        diagramInstance.group();
    }

});