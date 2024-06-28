<template>
<div class="result"></div>
</template>
<script>

import Vue from 'vue';
import { Internationalization } from '@syncfusion/ej2-base';
export default {
mounted:function(){
var intl  = new Internationalization();
var nParser  =  intl.getNumberParser({ format:'P2' , useGrouping: false});
var val  = nParser('123567.45%');
document.querySelector('.result').innerHTML = val + '';
}
}
</script>
<style>
</style>