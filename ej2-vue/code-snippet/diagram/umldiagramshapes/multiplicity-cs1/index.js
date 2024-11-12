
    import Vue from 'vue';
    import { DiagramPlugin,UmlClassifierShapeModel } from '@syncfusion/ej2-vue-diagrams';
    Vue.use(DiagramPlugin);
    let connectors = [{
      id: 'connector1',
      //Define connector start and end points
      sourcePoint: { x: 100, y: 100 },
      targetPoint: { x: 300, y: 300 },
      type: 'Straight',
      shape: {
        type: 'UmlClassifier',
        relationship: 'Dependency',
        multiplicity: {
          //Set multiplicity type
          type: 'OneToOne',
        },
      },
    },
    {
      id: 'connector2',
      //Define connector start and end points
      sourcePoint: { x: 200, y: 100 },
      targetPoint: { x: 400, y: 300 },
      type: 'Straight',
      shape: {
        type: 'UmlClassifier',
        relationship: 'Dependency',
        multiplicity: {
          //Set multiplicity type
          type: 'ManyToOne',
          //Set source label to connector
          source: {
            optional: true,
            lowerBounds: '89',
            upperBounds: '67',
          },
          //Set target label to connector
          target: {
            optional: true,
            lowerBounds: '78',
            upperBounds: '90',
          },
        },
      },
    },
    {
      id: 'connector3',
      //Define connector start and end points
      sourcePoint: { x: 300, y: 100 },
      targetPoint: { x: 500, y: 300 },
      type: 'Straight',
      shape: {
        type: 'UmlClassifier',
        relationship: 'Dependency',
        multiplicity: {
          //Set multiplicity type
          type: 'OneToMany',
          //Set source label to connector
          source: {
            optional: true,
            lowerBounds: '89',
            upperBounds: '67',
          },
          //Set target label to connector
          target: {
            optional: true,
            lowerBounds: '78',
            upperBounds: '90',
          },
        },
      },
    },
    {
      id: 'connector4',
      //Define connector start and end points
      sourcePoint: { x: 400, y: 100 },
      targetPoint: { x: 600, y: 300 },
      type: 'Straight',
      shape: {
        type: 'UmlClassifier',
        relationship: 'Dependency',
        multiplicity: {
          //Set multiplicity type
          type: 'ManyToMany',
          //Set source label to connector
          source: {
            optional: true,
            lowerBounds: '89',
            upperBounds: '67',
          },
          //Set target label to connector
          target: {
            optional: true,
            lowerBounds: '78',
            upperBounds: '90',
          },
        },
      },
    }]

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-diagram id="diagram"  :width='width' :height='height' :connectors='connectors' ></ejs-diagram>
    </div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "600px",
            connectors: connectors,
        }
    }

});