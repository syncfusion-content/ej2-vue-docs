<template>
<div id="app">
  <div id="container" style="margin:10px auto 0; width:250px;">
    <label>Enter Text: </label>
    <input type="text" id="filterTextBox" @input="handleFilterChange" placeholder="Enter text to filter" />
    <h4>Select your favorite car:</h4>
    <ejs-listbox id="listbox" :dataSource="data"></ejs-listbox>
  </div>
</div>
</template>

<script>
import { ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';

export default {
name: "App",
components: {
  "ejs-listbox": ListBoxComponent
},
data() {
  return {
    data: [
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
},
methods: {
  handleFilterChange(event) {
    const listbox = document.getElementById('listbox').ej2_instances[0];
    if (listbox) {
      listbox.filter(this.data, new Query().where('text', 'contains', event.target.value, true));
    }
  }
}
};
</script>