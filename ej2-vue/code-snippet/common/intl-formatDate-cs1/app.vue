<template>
  <div class="result" ref="result"></div>
</template>
  
<script setup>
import { Internationalization } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const result = ref(null);

onMounted(() => {
  var intl = new Internationalization();
  var dFormatter = intl.getDateFormat({ skeleton: 'full', type: 'dateTime' });
  var formattedString = dFormatter(new Date('1/12/2014 10:20:33'));
  result.value.innerHTML = formattedString;
});
</script>
