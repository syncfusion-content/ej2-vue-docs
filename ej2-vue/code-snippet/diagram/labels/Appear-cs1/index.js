
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the node
        annotations: [{
            content: 'Annotation visibility true',
            // Sets the style for the text to be displayed
            style: {
                color: 'blue',
                bold: true,
                italic: true,
                fontSize: 15,
                fontFamily: 'TimesNewRoman',
                fill: 'orange',
                opacity: 0.6,
            },
            visibility:true
        },
        {
            content: 'Annotation visibility false',
            offset: { x: 0.5, y: 1 },
            style: {
                color: 'blue',
                bold: true,
                italic: true,
                fontSize: 15,
                fontFamily: 'TimesNewRoman',
                fill: 'orange',
                whiteSpace: 'PreserveAll',
                opacity: 0.6,
            },
            visibility: false,
        }
        ]
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
                height: "350px",
                nodes: nodes,
            }
        }
    
});