<template>
    <div class="result" ref="result"></div>
</template>
    
<script setup>
import { Internationalization } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const result = ref(null);

onMounted(() => {
    var intl = new Internationalization();
    var nParser = intl.getNumberParser({ format: 'P2', useGrouping: false });
    var val = nParser('123567.45%');
    result.value.innerHTML = val + '';
})
</script>
