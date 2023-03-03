

<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :value='value' placeholder='NumericTextBox' :created='onCreate' :blur='onBlur' floatLabelType='Always'></ejs-numerictextbox>
        </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);
export default {
  data () {
    return {
      value : null
    }
  },
  methods: {
    onCreate: function (event) {
      var numericObj=document.getElementById("numeric").ej2_instances[0];
      //  prevents nullable value during initialization
      if (numericObj.value==null) {
        numericObj.value=0;
      }
   }
   onBlur: function(args) {
     if(args.value == null) {
       numeric.value = 0;
     }
   }
}
}
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
  margin: 0 auto;
  width: 240px;
  padding-top: 100px;
}
</style>


