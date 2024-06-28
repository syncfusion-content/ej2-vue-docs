<template>
    <div id='container'>
        <div ref='element1' id='element1'></div>
        <div ref='element2' id='element2'></div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { Animation } from '@syncfusion/ej2-base';

const element1 = ref(null);
const element2 = ref(null);

onMounted(() => {
    var animation = new Animation();
    animation.animate(element1.value, { name: 'FadeOut' });
    animation.animate(element2.value, { name: 'ZoomOut' });
})
</script>
<style>
#element1,
#element2 {
    background: #333333;
    border: 1px solid #cecece;
    box-sizing: border-box;
    float: left;
    height: 100px;
    width: 100px;
}

#element2 {
    margin-left: 20px;
}
</style>