<template>
  <div class="result"></div>
</template>
<script>
  
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';
export default {
  mounted:function(){
  var intl  = new Internationalization();
  var val  = intl.parseNumber('$01,234,545.650', { format: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
  document.querySelector('.result').innerHTML = val + '';
}
}
</script>
<style>
</style>