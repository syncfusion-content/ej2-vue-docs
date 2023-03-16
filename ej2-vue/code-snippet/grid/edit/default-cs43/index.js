
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid id="Grid" v-on:click.native="click" ref="grid" :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, mode: 'Batch' },
      toolbar: ['Edit', 'Update', 'Cancel']
    };
  },
  methods: {
    click(event) {
      if((event.target as any).classList.contains("e-rowcell")){
          let index: number = parseInt((event.target as any).getAttribute("Index"));
          let colindex:number = parseInt((event.target as any).getAttribute("aria-colindex"));
          let field:string = this.$refs.grid.ej2Instances.getColumns()[colindex].field;
          this.$refs.grid.ej2Instances.editModule.editCell(index, field);
      }
    }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});