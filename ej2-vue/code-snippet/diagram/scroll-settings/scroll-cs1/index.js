
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "500px",
                scrollSettings: {
                    //To scroll the diagram infinitely
                    scrollLimit: 'Infinity',
                },
                rulerSettings: {
                    showRulers: true
                }
            }
        }
        mounted: function() {
            let diagramInstance: Diagram;
            let diagramObj: any = document.getElementById("diagram");
            diagramInstance = diagramObj.ej2_instances[0];
            diagramInstance.scrollSettings.horizontalOffset = 100;
            diagramInstance.scrollSettings.verticalOffset = 100;
            diagramInstance.dataBind();
        }
    
});