<template>
  <div class="control-section">
    <div id='flat-list'>
      <!-- ListView element -->
      <ejs-listview id='sample-list-flat' :dataSource='data' showCheckBox='true' headerTitle='To Do List'
        showHeader='true'></ejs-listview>
    </div>
  </div>
</template>
<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";

const data = [
  { text: 'Do Meditation', id: '1' },
  { text: 'Go Jogging', id: '2' },
  { text: 'Buy Groceries', id: '3' },
  { text: 'Pay Phone bill', id: '4' },
  { text: 'Play Football with your friends', id: '5' },
];

</script>
<style>
#sample-list-flat {
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin: auto;
}

#flat-list {
  max-width: 350px;
  padding: 10px;
  margin: auto;
}
</style>