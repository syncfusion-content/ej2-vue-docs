<template>
  <div class="control-section">
    <div id = 'sample'>
      <input class="e-input" type="text" id='textbox' ref='textboxEle' placeholder="Filter" title="Type in a name" @keyup='onkeyup' />
      <!-- ListView element -->
      <ejs-listview id='list' ref='listObj' :dataSource='data' :fields='fields' sortOrder='Ascending'>
      </ejs-listview>
    </div>
  </div>
</template>
<script>

import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { DataManager, Query } from "@syncfusion/ej2-data";

export default {
name: "App",
components: {
"ejs-listview":ListViewComponent
},
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
   onkeyup: function(){
      let keyupvalue = this.$refs.textboxEle.value;
      let data = new DataManager(this.data).executeLocal(new Query().where("text", "startswith", keyupvalue, true));
      if (!keyupvalue) {
        this.$refs.listObj.ej2Instances.dataSource = this.data.slice();
      } else {
        this.$refs.listObj.ej2Instances.dataSource = data;
      }
    }
  }
}
</script>
<style>
#list {
  box-shadow: 0 1px 4px #ddd;
  border-bottom: 1px solid #ddd;
}
#sample {
  height: 220px;
  margin: 0 auto;
  display: table;
}
</style>