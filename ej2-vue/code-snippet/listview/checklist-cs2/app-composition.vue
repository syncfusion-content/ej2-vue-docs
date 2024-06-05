<template>
  <div class="control-section">
    <div id='flat-list'>
      <!-- ListView element -->
      <ejs-listview id='sample-list-flat' :dataSource='data' showCheckBox='true'
        checkBoxPosition='Right'></ejs-listview>
    </div>
  </div>
</template>
<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";

const data = [
  { text: 'Hennessey Venom', id: 'list-01' },
  { text: 'Bugatti Chiron', id: 'list-02' },
  { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
  { text: 'SSC Ultimate Aero', id: 'list-04' },
  { text: 'Koenigsegg CCR', id: 'list-05' },
  { text: 'McLaren F1', id: 'list-06' },
  { text: 'Aston Martin One- 77', id: 'list-07' },
  { text: 'Jaguar XJ220', id: 'list-08' },
  { text: 'McLaren P1', id: 'list-09' },
  { text: 'Ferrari LaFerrari', id: 'list-10' },
];

</script>
<style>
#sample-list-flat {
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin: auto;
}

#flat-list {
  width: 50%;
  padding: 10px;
  margin: auto;
}
</style>