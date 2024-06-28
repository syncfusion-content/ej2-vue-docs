<template>
  <div id='container'>
    <div id='droppable'>
      <p class='drop'><span>Drag Area </span></p>
    </div>
    <div id='element1' ref='element1'>
      <p class='drag-text'>Drag </p>
    </div>
  </div>
</template>

<script setup>
import { Draggable } from '@syncfusion/ej2-base';
import { onMounted, ref } from 'vue';
const element1 = ref(null)
onMounted(() => {
  new Draggable(element1.value, {
    clone: false, dragArea: "#droppable"
  });
})
</script>

<style>
#element1 {
  height: 100px;
  width: 150px;
  border: 1px solid #cecece;
  cursor: move;
  background: #cdffe3;
  user-select: none;
  touch-action: none;
}

#element1 p {
  padding-top: 23px;
  text-align: center;
}

.drop {
  padding-top: 23px;
  text-align: center;
}

#droppable {
  margin: 5px;
  line-height: 170px;
  font-size: 14px;
  width: 250px;
  border: 1px solid #cecece;
  background: #f6f6f6;
  touch-action: none;
}
</style>