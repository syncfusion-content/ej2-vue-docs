

<template>
  <div class="result"> </div>
</template>
<script>
import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';
export default {
  mounted: function(){
var  intl = new Internationalization();
var formattedString  = intl.formatNumber(12345.65, { format:'C5' , useGrouping: false,
minimumSignificantDigits:1, maximumSignificantDigits:3 });
document.querySelector('.result').innerHTML = formattedString;
  }
}
</script>
<style>
</style>


