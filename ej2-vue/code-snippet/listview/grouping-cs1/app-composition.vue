<template>
  <div class="control-section">
    <div id='group-list'>
      <!-- Group ListView element -->
      <ejs-listview id='sample-list-group' :dataSource='cars' :fields='fields'></ejs-listview>
    </div>
  </div>
</template>

<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";

const cars = [
  {
    'text': 'Audi A4',
    'id': '9bdb',
    'category': 'Audi'
  },
  {
    'text': 'Audi A5',
    'id': '4589',
    'category': 'Audi'
  },
  {
    'text': 'BMW 501',
    'id': 'f849',
    'category': 'BMW'
  },
  {
    'text': 'BMW 502',
    'id': '7aff',
    'category': 'BMW'
  }
];
const fields = { groupBy: 'category', tooltip: 'text' };

</script>
<style>
#sample-list-group {
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin: auto;
}

#group-list {
  width: 50%;
  padding: 10px;
  margin: auto;
}
</style>