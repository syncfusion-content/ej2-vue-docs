<template>
  <div class="result" ref="result"></div>
</template>
  
<script setup>
import { Internationalization } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const result = ref(null);
onMounted(() => {
  var intl = new Internationalization();
  var dParser = intl.getDateParser({ skeleton: 'full', type: 'dateTime' });
  var val = dParser('Friday, November 4, 2016 at 1:03:04 PM GMT+05:30');
  result.value.innerHTML = val.toString();
})
</script>
