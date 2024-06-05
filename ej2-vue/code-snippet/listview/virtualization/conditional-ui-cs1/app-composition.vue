<template>
  <div class="control-section">
    <ejs-listview id='ui-list' :dataSource='listData' :enableVirtualization='enableUi' :template='gTemplate'
      :height='height'>
    </ejs-listview>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { onBeforeMount } from "vue";
import { ListViewComponent as EjsListview, Virtualization } from "@syncfusion/ej2-vue-lists";

let listData = [];

onBeforeMount(() => {
  listData = [
    { text: 'Nancy', id: '0', },
    { text: 'Andrew', id: '1' },
    { text: 'Janet', id: '2' },
    { text: 'Margaret', id: '3' },
    { text: 'Steven', id: '4' },
    { text: 'Laura', id: '5' },
    { text: 'Robert', id: '6' },
    { text: 'Michael', id: '7' },
    { text: 'Albert', id: '8' },
    { text: 'Nolan', id: '9' }
  ];

  for (let i = 10; i <= 1000; i++) {
    let index = parseInt((Math.random() * 10).toString());
    listData.push({ text: listData[index].text, id: i.toString() });
  }
});

const gTemplate = '<div id="list-container" class="${ $id % 2 === 0 ? \'even-list\' : \'odd-list\' }" > ${text} </div>';
const height = 500;
const enableUi = true;

provide('listview', [Virtualization]);

</script>

<style>
#app {
  color: #008cff;
  height: 40px;
  left: 30%;
  position: absolute;
}

#ui-list {
  display: block;
  max-width: 400px;
  margin: auto;
  border: 1px solid #dddddd;
  border-radius: 3px;
  cursor: pointer;
}

#list-container {
  height: inherit;
  width: inherit;
  padding-left: 30px;
}

#ui-list .e-list-item {
  padding: 0;
}

#ui-list .even-list {
  background-color: lightblue;
}

#ui-list .odd-list {
  background-color: lightcoral;
}
</style>