
    import Vue from 'vue';
    import { DiagramPlugin,PageSettings } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [
        {
            id: 'node1',
            width: 100,
            height: 100,
            offsetX: 200,
            offsetY: 200,
            annotations: [{ content: 'Node fits at the center of view port' }],
        },
    ]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes'
        :pageSettings='pageSettings' ></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "800px",
                nodes: nodes,
                pageSettings: {
                    background: {
                        color: 'grey'
                    },
                    width: 500,
                    height: 500,
                    fitOptions: {
                        // Fits the content to the center of the viewport
                        canFit: true,
                        // Allows zooming in to fit smaller content
                        canZoomIn: true,
                        // Specifies the region to fit to the center
                        region: 'Content',
                        // Specifies the mode of fitOptions
                        mode: 'Page',
                        // Defines the margin around the fitted content
                        margin: { left: 50, right: 50, top: 50, bottom: 50 },
                    },
                }
            }
        }
    
});