<template>
  <div class="result"></div>
</template>
<script>
import Vue from 'vue';
import {Internationalization} from '@syncfusion/ej2-base';
export default {
  mounted:function(){
var intl = new Internationalization();
var val =  intl.parseDate('11/2016',{skeleton: 'yM'});
document.querySelector('.result').innerHTML = val.toString();
  }
}
</script>
<style>
</style>