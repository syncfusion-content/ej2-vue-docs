
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button @click="updateScrollsettings">Update Scrollsettings</button>
        <ejs-diagram id="diagram"  :width='width' :height='height' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "500px",
                rulerSettings: { showRulers: true },
                scrollSettings: { scrollLimit: 'Infinity' },
            }
        }
        methods: {
            updateScrollsettings: function() {
                let diagramInstance;
                let diagramObj = document.getElementById("diagram");
                diagramInstance = diagramObj.ej2_instances[0];
                diagramInstance.scrollSettings.horizontalOffset = 200;
                diagramInstance.scrollSettings.verticalOffset = 200
                diagramInstance.dataBind();
            }
        },
    
});