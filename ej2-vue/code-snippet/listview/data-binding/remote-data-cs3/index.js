
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createSpinner, showSpinner, setSpinner } from '@syncfusion/ej2-vue-popups';

Vue.use(ListViewPlugin);

new Vue({
	el: '#app',
	template: `
 <div class="control-section">
    <div id="flat-list">
    <!-- ListView element -->
    <ejs-listview id='sample-list' :dataSource='data' :query='query' :fields='fields' :headerTitle='headerTitle' showHeader='true' :actionComplete='onComplete'></ejs-listview>
    </div>
    <div ref='spinnerEle' id="spinner" ></div>
  </div>
`,

  data: function() {
     return {
      data: new DataManager({
        url: '//js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
      }),
      query: new Query().from('Products').select('ProductID,ProductName').take(10),
      fields:  { id: 'ProductID', text: 'ProductName' },
      headerTitle: 'Products',
    };
  },
  mounted: function(){
     createSpinner({ target: this.$refs.spinnerEle });
    showSpinner(this.$refs.spinnerEle);
  },
  methods: {
    onComplete: function(){
      this.$refs.spinnerEle.style.display = "none";
    }
  }

});