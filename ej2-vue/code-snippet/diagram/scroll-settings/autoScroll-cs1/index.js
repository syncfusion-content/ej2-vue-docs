
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    }]
    
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :nodes='nodes' :scrollSettings='scrollSettings' :getNodeDefaults='getNodeDefaults'></ejs-diagram>
    </div>
`,

        name: 'app'
        data() {
            return {
                width: "100%",
                height: "350px",
                nodes: nodes,
                scrollSettings: {
                    canAutoScroll: true,
                    scrollLimit: 'Infinity',
                    autoScrollBorder: {
                        left: 100,
                        right: 100,
                        top: 100,
                        bottom: 100
                    }
                },
                getNodeDefaults: (node) => {
                    node.height =  100;
                    node.width =  100;
                    node.style.fill =  '#6BA5D7';
                    node.style.strokeColor =  'white';
                    return  node;
                }
            }
        }
    
});