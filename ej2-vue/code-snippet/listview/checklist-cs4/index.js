
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";
Vue.use(ListViewPlugin);


new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div id = 'sample'>
      <input class="e-input" type="text" id='textbox' ref='textboxEle' placeholder="Filter" title="Type in a name" @keyup='onkeyup' />
      <!-- ListView element -->
      <ejs-listview id='list' ref='listObj' :dataSource='data' :fields='fields' sortOrder='Ascending'>
      </ejs-listview>
    </div>
  </div>
`,

  data: function() {
    return {
      data: [
        { text: "Hennessey Venom", id: "list-01" },
        { text: "Bugatti Chiron", id: "list-02" },
        { text: "Bugatti Veyron Super Sport", id: "list-03" },
        { text: "SSC Ultimate Aero", id: "list-04" },
        { text: "Koenigsegg CCR", id: "list-05" },
        { text: "McLaren F1", id: "list-06" }],
      fields: { text: "text", id: "id" },
    };
  },
  methods:{
   onkeyup: function(event){
      let keyupvalue = this.$refs.textboxEle.value;
      let data = new DataManager(this.data).executeLocal(new Query().where("text", "startswith", keyupvalue, true));
      if (!keyupvalue) {
        this.$refs.listObj.dataSource = this.data.slice();
      } else {
        this.$refs.listObj.dataSource = data;
      }
    }
  }

});