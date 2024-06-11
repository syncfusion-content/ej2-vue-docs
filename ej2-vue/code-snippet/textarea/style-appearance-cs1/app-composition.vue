<template>
  <div class='wrap'>
    <h4> Small Size </h4>
    <div className="e-input-group e-small">
      <ejs-textarea id="default1" className="e-input" placeholder="Enter your comments"></ejs-textarea>
    </div>

    <h4> Bigger Size </h4>
    <div className="e-input-group e-bigger">
      <ejs-textarea id="default2" className="e-input" placeholder="Enter your comments"></ejs-textarea>
    </div>
  </div>
</template>
<script setup>
import { TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs';
import { onMounted } from 'vue';

onMounted(() => {
  /* To get the Input elements */
  let inputElement1 = document.getElementById('default1');
  let inputElement2 = document.getElementById('default2');

  inputElement1.addEventListener("focus", function () {
    this.parentElement.classList.add("e-input-focus");
  });

  inputElement1.addEventListener("blur", function () {
    this.parentElement.classList.remove('e-input-focus');
  });

  inputElement2.addEventListener("focus", function () {
    this.parentElement.classList.add("e-input-focus");
  });

  inputElement2.addEventListener("blur", function () {
    this.parentElement.classList.remove('e-input-focus');
  });
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