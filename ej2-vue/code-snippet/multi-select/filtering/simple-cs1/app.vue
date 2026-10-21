<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='sportsData' placeholder="Select a game" :debounceDelay='debounceDelay'></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiSelectComponent
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/multi-select/index.css";
</style>
