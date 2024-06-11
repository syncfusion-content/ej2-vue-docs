<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
      <ejs-listbox :dataSource='data'></ejs-listbox>
    </div>
  </div>
</template>
<script>
import { ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    "ejs-listbox": ListBoxComponent
  },
  data() {
    return {
      data: ["Hennessey Venom", "Bugatti Chiron", "Bugatti Veyron Super Sport", "SSC Ultimate Aero", "Koenigsegg CCR", "McLaren F1", "Aston Martin One- 77", "Jaguar XJ220", "McLaren P1", "Ferrari LaFerrari"];
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
