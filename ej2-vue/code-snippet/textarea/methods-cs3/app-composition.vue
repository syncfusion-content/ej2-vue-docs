<template>
  <div class='wrap'>
    <div id='input-container'>
      <ejs-textarea id="default" ref="textareaRef"></ejs-textarea>
      <br />
      <button id="button">Get Persist-data</button>
    </div>
  </div>
</template>
<script setup>
import { TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs';
import { onMounted, ref } from 'vue';

const textareaRef = ref(null);

onMounted(() => {
  document.getElementById('button').onclick = () => {
    textareaRef.value.ej2Instances.getPersistData();
  };
});

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 10px;
  width: 340px;
}
</style>