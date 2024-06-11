<template>
  <div class="control-section">
    <ejs-listview ref='listview' id='sample-list' :dataSource='data' showCheckBox=true :fields='fields'></ejs-listview>
    <br />
    <ejs-button id="btn" v-on:click="onClick">Get Selected Items</ejs-button>
    <div ref='valEle' id="val"> </div>
  </div>
</template>

<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { createApp, ref } from "vue";


const listview = ref(null);
const valEle = ref(null);

createApp().component("demo", {
  template: `<div class='text-content'> {{data.text}} <span class = 'delete-icon'></span> </div>`,
  data() {
    return {
      data: {}
    };
  }
});

const data = [
  { text: 'Hennessey Venom', id: 'list-01' },
  { text: 'Bugatti Chiron', id: 'list-02', isChecked: true },
  { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
  { text: 'SSC Ultimate Aero', id: 'list-04', isChecked: true },
  { text: 'Koenigsegg CCR', id: 'list-05' },
  { text: 'McLaren F1', id: 'list-06' },
  { text: 'Aston Martin One- 77', id: 'list-07', isChecked: true },
  { text: 'Jaguar XJ220', id: 'list-08' }];
const fields = { id: 'id', isChecked: 'isChecked' };

const onClick = () => {
  let selecteditem = listview.value.getSelectedItems();
  valEle.value.innerHTML = "";
  for (let i = 0; i < selecteditem["data"].length; i++) {
    let listData = document.createElement('p');
    listData.innerHTML = "text : " + selecteditem["text"][i] + " , " + "id : " + selecteditem["data"][i].id;
    valEle.value.append(listData);
  }
}

</script>
<style>
#sample-list {
  display: block;
  max-width: 400px;
  margin: auto;
  border: 1px solid #dddddd;
  border-radius: 3px;
}
</style>