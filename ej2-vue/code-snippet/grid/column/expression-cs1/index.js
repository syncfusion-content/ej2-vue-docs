
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :height='315'>
            <e-columns>
                <e-column field='FoodName' headerText='Food Name' width=150></e-column>
                <e-column field='Protein' headerText='Protein' textAlign='Right' width=120></e-column>
                <e-column field='Fat' headerText='Fat' textAlign='Right' width=80></e-column>
                <e-column field='Carbohydrate' headerText='Carbohydrate' textAlign='Right' width=120></e-column>
                <e-column headerText='Calories Intake' textAlign='Right' :valueAccessor='totalCalories' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data
    };
  },
  methods: {
    totalCalories: function(field, data, column) {
        return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
    }
  }

});