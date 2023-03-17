
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' :dataSource='vegetableData' :fields='fields' popupHeight="200px" placeholder="select a vegetable"></ejs-combobox>
    </div>
  </div>
`,

  data (){
    return {
      vegetableData: [
            { Vegetable: 'Cabbage', Category: 'Leafy and Salad', Id: 'item1' },
            { Vegetable: 'Spinach', Category: 'Leafy and Salad', Id: 'item2' },
            { Vegetable: 'Wheat grass', Category: 'Leafy and Salad', Id: 'item3' },
            { Vegetable: 'Yarrow', Category: 'Leafy and Salad', Id: 'item4' },
            { Vegetable: 'Pumpkins', Category: 'Leafy and Salad', Id: 'item5' },
            { Vegetable: 'Chickpea', Category: 'Beans', Id: 'item6' },
            { Vegetable: 'Green bean', Category: 'Beans', Id: 'item7' },
            { Vegetable: 'Horse gram', Category: 'Beans', Id: 'item8' },
            { Vegetable: 'Garlic', Category: 'Bulb and Stem', Id: 'item9' },
            { Vegetable: 'Nopal', Category: 'Bulb and Stem', Id: 'item10' },
            { Vegetable: 'Onion', Category: 'Bulb and Stem', Id: 'item11' }
      ],
      fields : { groupBy: 'Category', text: 'Vegetable', value: 'Id' }
    }
  }

});