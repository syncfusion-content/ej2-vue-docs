<template>
  <div id="app">
    <div class='wrap'>
      <ejs-numerictextbox id="numeric" :value='value' format='n2' :decimals='decimals' placeholder='NumericTextBox'
        :change='onChange' :created='onCreate'></ejs-numerictextbox>
    </div>
  </div>
</template>
<script>

import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  name: "App",
  components: {
    "ejs-numerictextbox": NumericTextBoxComponent
  },
  data() {
    return {
      value: 10,
      decimals: 2
    }
  },
  methods: {
    onChange: function () {
      var numericObj = document.getElementById("numeric").ej2_instances[0];
      numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
    },
    onCreate: function () {
      document.getElementById("numeric").addEventListener('focus', function () {
        var numericObj = document.getElementById("numeric").ej2_instances[0];
        numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
      });

    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  margin: 0 auto;
  width: 240px;
  padding-top: 100px;
}
</style>