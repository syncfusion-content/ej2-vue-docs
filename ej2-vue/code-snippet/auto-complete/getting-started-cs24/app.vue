<template>
  <div id="app">
    <div class='autocomplete'>
      <ejs-autocomplete ref='instance' id='employees' :dataSource='data' :placeholder='waterMark'
        :noRecordsTemplate='nTemplate'>
      </ejs-autocomplete>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';

const nVue = createApp().component("noRecordsTemplate", {
  template: `<span class="norecord"> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-autocomplete": AutoCompleteComponent
  },
  data() {
    return {
      waterMark: 'Find an item',
      data: [],
      nTemplate: function (e) {
        return {
          template: nVue
        };
      },
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  position: absolute;
  width: 90%;
  top: 10%;
}

.autocomplete {
  width: 30%;
  margin: 0 auto;
}
</style>
