<template>
  <div id="app">
    <div id='container' style="margin:15px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='sportsData' placeholder="Select a game" mode="CheckBox"
        :fields='fields' :maximumSelectionLength='maximumSelectionLength'></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiSelectComponent
  },
  data() {
    return {
      sportsData: [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' },
        { Id: 'game4', Game: 'Golf' },
        { Id: 'game5', Game: 'Cricket' },
        { Id: 'game6', Game: 'Handball' },
        { Id: 'game7', Game: 'Karate' },
        { Id: 'game8', Game: 'Fencing' },
        { Id: 'game9', Game: 'Boxing' }
      ],
      fields: { text: 'Game', value: 'Id' },
      maximumSelectionLength: 3
    }
  },
  provide: {
    multiselect: [CheckBoxSelection]
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
