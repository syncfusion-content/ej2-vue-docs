
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 100, height: 100,
        offsetX: 250, offsetY: 250,
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "500px",
                nodes: nodes,
                rulerSettings: { showRulers: true },
                // set the autoScrollBorder
                scrollSettings: {
                    canAutoScroll: true,
                    scrollLimit: 'Infinity',
                    //Sets the scroll limit
                    padding: { left: 100, top: 100 }
                },
            }
        }
    
});