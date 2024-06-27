<template>
  <div class="result" ref="result"></div>
</template>
    
<script setup>
import { Internationalization } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const result = ref(null);
onMounted(() => {
  var intl = new Internationalization();
  var nFormatter = intl.getNumberFormat({ skeleton: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
  var formattedValue = nFormatter(1234545.65)
  result.value.innerHTML = formattedValue;
})
</script>
