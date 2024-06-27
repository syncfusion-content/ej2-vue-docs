<template>
  <div class="result" ref="result"></div>
</template>
  
<script setup>
import { Internationalization } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const result = ref(null);
onMounted(() => {
  var intl = new Internationalization();
  var formattedString = intl.formatNumber(12345.65, {
    format: 'C5', useGrouping: false,
    minimumSignificantDigits: 1, maximumSignificantDigits: 3
  });
  result.value.innerHTML = formattedString;
})
</script>
