<template>
  <div id='container'>
    <div id='element1' ref='element1'>
      <p>Draggable Element </p>
    </div>
  </div>
</template>

<script setup>
import { Draggable } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';

const element1 = ref(null);

onMounted(() => {
  new Draggable(element1.value, { clone: true });
})
</script>

<style>
#element1,
.helper {
  height: 100px;
  width: 150px;
  border: 1px solid #cecece;
  cursor: move;
  user-select: none;
  color: #6a77a7;
  touch-action: none;
}

p {
  padding-top: 23px;
  text-align: center;
}

.helper {
  opacity: 0.6;
}

.select {
  border: 1px solid #cccccc;
  background: #ededed;
}
</style>