<template>
  <div class="result" ref="result"></div>
</template>
  
<script setup>
import { Internationalization } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const result = ref(null);

onMounted(() => {
  var intl = new Internationalization();
  var val = intl.parseNumber('$01,234,545.650', { format: 'C3', currency: 'USD', minimumIntegerDigits: 8 });
  result.value.innerHTML = val + '';
})
</script>
