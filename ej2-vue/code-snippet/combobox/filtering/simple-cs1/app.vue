<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' :dataSource='sportsData' placeholder="Select a game" :debounceDelay='debounceDelay'></ejs-combobox>
    </div>
  </div>
</template>
<script>
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    "ejs-combobox": ComboBoxComponent
  },
  data() {
    return {
      debounceDelay: 300,
      sportsData: ['Badminton', 'Basketball', 'Cricket',
        'Football', 'Golf', 'Gymnastics',
        'Hockey', 'Rugby', 'Snooker', 'Tennis'
      ]
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
