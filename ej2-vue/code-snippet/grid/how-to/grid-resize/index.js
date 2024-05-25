
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin  } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div style="display: inline-block;">
            <label> Enter the width: </label> 
            <ejs-numerictextbox ref='widthTextbox' :min="400" :max="650" :step='5' :placeholder="400" format="n"  width='120px'></ejs-numerictextbox>
            <label> Enter the height </label> 
            <ejs-numerictextbox ref='heightTextbox' :min="200" :max="600" :step='5' :placeholder="200" format="n"  width='120px'></ejs-numerictextbox>
            <ejs-button ref='button' cssClass='e-outline' v-on:click="onExternalResize">Update</ejs-button>
        </div>
        <div id="parent">
            <ejs-grid ref='grid' style="padding: 5px 5px"  :dataSource='data'  height='100%'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
                    <e-column field='Freight' headerText='Freight' width=80></e-column>
                </e-columns>
            </ejs-grid>
        </div>
    </div>
`,

  data: () => {
    return {
      data: data
    };
  },
  methods: {
    onExternalResize: function() {
        const parentDiv = document.getElementById('parent');
        parentDiv.style.width = this.$refs.widthTextbox.$el.value + 'px';
        parentDiv.style.height = this.$refs.heightTextbox.$el.value + 'px';
    }
  },
});