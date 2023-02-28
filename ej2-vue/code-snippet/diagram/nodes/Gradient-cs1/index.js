
    import Vue from 'vue';
    import { DiagramPlugin,GradientModel,LinearGradientModel,RadialGradientModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let linearGradient: GradientModel | LinearGradientModel | RadialGradientModel;
    linearGradient = {
        //Start point of linear gradient
        x1: 0,
        y1: 0,
        //End point of linear gradient
        x2: 50,
        y2: 50,
        //Sets an array of stop objects
    stops: [{
            color: 'white',
            offset: 0
        },
        {
            color: '#6BA5D7',
            offset: 100
        }
    ],
    type: 'Linear'
};
let nodes = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        gradient: linearGradient
    }
    // Text(label) added to the node
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