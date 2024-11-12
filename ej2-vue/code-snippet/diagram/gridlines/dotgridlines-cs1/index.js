
    import Vue from 'vue';
    import { DiagramPlugin,SnapConstraints,Snapping,Diagram } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    Diagram.Inject(Snapping);
    let snapSettings = {
    constraints: SnapConstraints.ShowLines,
    gridType: 'Dots',
    horizontalGridlines: {
        // Sets the lineIntervals of Gridlines
        dotIntervals:  [3, 20, 1, 20, 1, 20, 1, 20, 1, 20],
        lineColor: 'blue',
        lineDashArray: '2 2'
    },
    verticalGridlines: {
        // Sets the lineIntervals of Gridlines
        dotIntervals: [3, 20, 1, 20, 1, 20],
        lineColor: 'blue',
        lineDashArray: '2 2'
    }
   };
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :snapSettings='snapSettings' ></ejs-diagram>
    </div>
`,
name: 'app',
data() {
    return {
        width: "100%",
        height: "350px",
        snapSettings:snapSettings
    }
}
});