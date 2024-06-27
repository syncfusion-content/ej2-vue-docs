<template>
  <div class="result"></div>
</template>
<script>
import { Internationalization } from '@syncfusion/ej2-base';
export default {
  mounted:function(){
var  intl = new Internationalization();
var nFormatter = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD',minimumIntegerDigits:8});
var formattedValue  = nFormatter(1234545.65)
document.querySelector('.result').innerHTML = formattedValue;
  }
}
</script>
<style>
</style>