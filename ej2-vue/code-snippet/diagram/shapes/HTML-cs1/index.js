
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //sets the type of the shape as Image
        shape: {
            type: 'Image',
            source: 'https://ej2.syncfusion.com/demos/src/diagram/employees/image16.png',
            scale: 'None'
        },
        //Customizes the appearances such as text, font, fill, and stroke.
        style: {
            fill: 'none'
        }
    }
]

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