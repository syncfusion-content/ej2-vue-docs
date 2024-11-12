
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label>Scrollable Area</label>
            <select id="scrollLimit" @change="onScrollLimitChange">
            <option value="Limited">Limited</option>
            <option value="Infinity">Infinity</option>
            <option value="Diagram">Diagram</option>
        </select>
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "700px",
                height: "700px",
                nodes: nodes,
                rulerSettings: { showRulers: true },
                // set the autoScrollBorder
                scrollSettings: {
                    canAutoScroll: true,
                    //Sets the scroll limit
                    scrollLimit: 'Limited',
                    //Sets the scrollable Area
                    scrollableArea: {
                        x: 0,
                        y: 0,
                        width: 1000,
                        height: 1000
                    }
                },
            }
        },
        methods: {
            onScrollLimitChange: function(args) {
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                diagramInstance.scrollSettings.scrollLimit = args.target.value;
                diagramInstance.dataBind();
            }
        },
    
});