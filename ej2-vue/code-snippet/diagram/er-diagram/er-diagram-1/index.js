
import Vue from 'vue';
import { DiagramPlugin, Diagram, ERDiagrams } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ERDiagrams);
Vue.use(DiagramPlugin);

// Define a basic ER entity (Customer table)
var customer = {
  id: 'Customer',
  offsetX: 400,
  offsetY: 300,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'Customer' }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull']
      },
      {
        id: 'cust_firstname',
        name: 'FirstName',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull']
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)',
        constraints: ['Unique']
      }
    ]
  }
};
new Vue({
    el: '#app',
    template: `
<div id="app">
    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes="nodes">
    </ejs-diagram>
    
</div>
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: [customer],
        }
    }
});
