<template>
  <div class="result" ref="result"></div>
</template>
  
<script setup>
import { Internationalization } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const result = ref(null);

onMounted(() => {
  var intl = new Internationalization();
  var val = intl.parseDate('11/2016', { skeleton: 'yM' });
  result.value.innerHTML = val.toString();
})
</script>
