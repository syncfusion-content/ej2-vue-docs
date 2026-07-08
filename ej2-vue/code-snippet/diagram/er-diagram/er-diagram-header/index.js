
import Vue from 'vue';
import { DiagramPlugin, Diagram, ErDiagrams } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ErDiagrams);
Vue.use(DiagramPlugin);

// Define an ER entity with customized header
var customer = {
  id: 'Customer',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'CUSTOMER TABLE',
        style: {
          color: 'white',
          fontSize: 13,
          bold: true,
          fontFamily: 'Arial'
        }
      },
      height: 35,
      style: {
        fill: '#2E75B6'
      }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true
      },
      {
        id: 'cust_name',
        name: 'FirstName',
        dataType: 'VARCHAR(50)'
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)'
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
            height: "400px",
            nodes: [customer],
        }
    }
});
