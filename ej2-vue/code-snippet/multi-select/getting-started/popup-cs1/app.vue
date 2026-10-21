<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='sportsData' popupHeight="250px" popupWidth="250px"
        placeholder="Find a game"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    'ejs-multiselect': MultiSelectComponent
  },
  data() {
    return {
      sportsData: ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis']
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/multi-select/index.css";
</style>
