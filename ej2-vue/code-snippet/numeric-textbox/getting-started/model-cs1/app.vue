

<template>
  <div id="app">
  <div class='wrap'>
        <div class='e-input-group' style='margin-bottom:30px'>
        <input class='e-input' type='text' v-model='value' placeholder='Enter a number'  />
        </div>
        <div>
           <ejs-numerictextbox v-model="value" :value="value"></ejs-numerictextbox>
        </div>
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
      value : 10
    }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
  margin: 35px auto;
  width: 240px;
}
</style>


