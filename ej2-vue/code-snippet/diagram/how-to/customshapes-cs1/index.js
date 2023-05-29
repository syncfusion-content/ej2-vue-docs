
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';

    let svgContent = '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#475452" /><text x="50%" y="50%" text-anchor="middle" stroke="#51c5cf">${addInfo.text}</text></svg>';

    let htmlContent = '<div style="background:#6BA5D7;height:100%;width:100%;"><button type="button" style="width:100px"> ${addInfo.text} </button></div>'

    Vue.use(DiagramPlugin);
    let addInfo  = { Designation: 'manager' };
    let nodes = [{
        id: 'node1', addInfo:{text:'Native'}, offsetX: 100, offsetY: 200, width: 100, height: 100, shape: {type: 'Native', content: svgContent}
    },
    {
      id: 'node2', addInfo:{text:'Html'}, offsetX: 300, offsetY:200, width:100, height: 100, shape: {type: 'HTML', content: htmlContent}
    }
    ]


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes'></ejs-diagram>
    </div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "350px",
            nodes: nodes,
        }
    },

});