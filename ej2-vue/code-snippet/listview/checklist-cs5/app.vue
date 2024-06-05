<template>
  <div class="control-section">
    <ejs-listview ref='listview' id='sample-list' :dataSource='data' showCheckBox=true :fields='fields'></ejs-listview>
    <br/>
    <ejs-button id="btn"  v-on:click.native="onClick" >Get Selected Items</ejs-button>
    <div ref='valEle' id="val"> </div>
  </div>
</template>
<style>
#sample-list {
  display: block;
  max-width: 400px;
  margin: auto;
  border: 1px solid #dddddd;
  border-radius: 3px;
}
</style>
<script>

import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { createApp } from "vue";

createApp().component("demo", {
  template: `<div class='text-content'> {{data.text}} <span class = 'delete-icon'></span> </div>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
name: "App",
components: {
"ejs-listview":ListViewComponent,
"ejs-button":ButtonComponent
},
  data: function() {
    return {
      data: [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02', isChecked: true },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03'},
    { text: 'SSC Ultimate Aero', id: 'list-04', isChecked: true  },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07', isChecked: true },
    { text: 'Jaguar XJ220', id: 'list-08' }],
    fields: { id: 'id', isChecked:'isChecked' },
    };
  },
  methods: {
    onClick: function(){
      let selecteditem =this.$refs.listview.getSelectedItems();
      this.$refs.valEle.innerHTML="";
      for(let i=0; i< selecteditem["data"].length; i++) {
      let listData = document.createElement('p');
      listData.innerHTML = "text : "+ selecteditem["text"][i]+" , "+"id : "+selecteditem["data"][i].id;
      this.$refs.valEle.append(listData);
      }
    }
  }
}
</script>