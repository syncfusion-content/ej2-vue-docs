
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                // Intialize header to swimlane
                header: {
                    annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: '#111111' } },
                    height: 50, style: { fontSize: 11 },
                },
                 // Intialize lane to swimlane
                lanes: [
                    {
                        id: 'stackCanvas1',
                        height: 100,
                         // Intialize header to lane
                        header: {
                            annotation: { content: 'CUSTOMER' }, width: 50,
                            style: { fontSize: 11 }
                        },
                    },

                ],
                phases: [
                    {
                        id: 'phase1', offset: 170,
                        header: { annotation: { content: 'Phase' } }
                    },
                    ],
                phaseSize: 20,
            },
            offsetX: 300, offsetY: 200,
            height: 200,
            width: 350
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