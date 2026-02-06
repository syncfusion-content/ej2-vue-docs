<template>
  <div id="app">
    <ejs-listview id='flat-list' :dataSource='dataSource' width="330px"></ejs-listview>
  </div>
</template>
<script>
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';

export default {
  name: "App",
  components: {
    'ejs-listview': ListViewComponent
  },
  data() {
    return {
      dataSource: [
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
      ]
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material3.css";

#flat-list {
  border: 1px solid #dddddd;
  border-radius: 3px;
}

#app {
  color: #008cff;
  height: 40px;
  left: 30%;
  position: absolute;
}
</style>