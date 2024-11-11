
    import Vue from 'vue';
    import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let nodes = [{
        id: 'node1',
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        //Sets the annotation for the node
        annotations: [
          {
            content: 'Annotation Text WrapWithOverflow',
            // Sets the style for the text wrapping
            style: {
              textWrapping: 'WrapWithOverflow',
            },
          },
        ],
      },
      {
        id: 'node2',
        // Position of the node
        offsetX: 300,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        //Sets the annotation for the node
        annotations: [
          {
            content: 'Annotation Text Wrap',
            // Sets the style for the text wrapping
            style: {
              textWrapping: 'Wrap',
            },
          },
        ],
      },
      {
        id: 'node3',
        // Position of the node
        offsetX: 500,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        //Sets the annotation for the node
        annotations: [
          {
            content: 'Annotation Text NoWrap',
            // Sets the style for the text wrapping
            style: {
              textWrapping: 'NoWrap',
            },
          },
        ],
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