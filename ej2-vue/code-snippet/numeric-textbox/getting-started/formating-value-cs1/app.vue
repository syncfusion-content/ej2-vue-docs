

<template>
  <div id="app">
    <div class='wrap'>
        <ejs-numerictextbox id="numeric" ref="numeric_instance" :format="format" :value="value"></ejs-numerictextbox>
    </div>
  </div>
</template>
<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  components: {
    'ejs-numerictextbox': NumericTextBoxComponent
  },
  data () {
    return {
       format: 'c2',
        // sets value to the NumericTextBox
        value: 10
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
}
</style>


