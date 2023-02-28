
    import Vue from 'vue';
    import { DiagramPlugin,SnapSettingsModel,SnapConstraints,Snapping,Diagram } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    Diagram.Inject(Snapping);
    let snapSettings: SnapSettingsModel = {
    // Display both Horizontal and Vertical gridlines
    constraints:  SnapConstraints.ShowLines  };
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :snapSettings='snapSettings' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                snapSettings:snapSettings
            }
        }
    
});