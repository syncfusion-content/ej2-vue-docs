<template>
  <div class='wrap'>
    <div id='input-container'>
      <div class="e-input-group e-warning">
        <input class="e-input" type="text" placeholder="Input with warning" />
      </div>

      <div class="e-input-group e-error">
        <input class="e-input" type="text" placeholder="Input with error" />
      </div>

      <div class="e-input-group e-success">
        <input class="e-input" type="text" placeholder="Input with success" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  let input = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');
  let inputIcon = document.querySelectorAll('.e-input-group-icon');

  for (let i = 0; i < input.length; i++) {
    //Focus Event binding for input component
    input[i].addEventListener('focus', function () {
      getParentNode(input[i]).classList.add('e-input-focus');
    });
    //Blur Event binding for input component
    input[i].addEventListener('blur', function () {
      getParentNode(input[i]).classList.remove('e-input-focus');
    });
  }
  for (let i = 0; i < inputIcon.length; i++) {
    inputIcon[i].addEventListener('mousedown', function () {
      inputIcon[i].classList.add('e-input-btn-ripple');
    });
    inputIcon[i].addEventListener('mouseup', function () {
      setTimeout(function () {
        inputIcon[i].classList.remove('e-input-btn-ripple');
      },
        500);
    });
  }

});

const getParentNode = (element) => {
  let parentNode = element.parentNode;
  if (parentNode.classList.contains('e-input-in-wrap')) {
    return parentNode.parentNode;
  }
  return parentNode;
};
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

#input-container .e-input-group {
  /* csslint allow: adjoining-classes */
  margin: 30px 0;
}

.e-float-input.e-success label.e-float-text {
  /* csslint allow: adjoining-classes */
  color: #22b24b;
}

.e-float-input.e-success input:focus~label.e-float-text {
  /* csslint allow: adjoining-classes */
  color: #22b24b;
}

.e-float-input.e-success input:valid~label.e-float-text {
  /* csslint allow: adjoining-classes */
  color: #22b24b;
}

.e-float-input.e-warning label.e-float-text {
  /* csslint allow: adjoining-classes */
  color: #ffca1c;
}

.e-float-input.e-warning input:focus~label.e-float-text {
  /* csslint allow: adjoining-classes */
  color: #ffca1c;
}

.e-float-input.e-warning input:valid~label.e-float-text {
  /* csslint allow: adjoining-classes */
  color: #ffca1c;
}
</style>