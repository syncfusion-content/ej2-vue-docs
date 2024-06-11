<template>
  <div class='wrap'>
    <div id='input-container'>
      <h4> TextBox with icons </h4>
      <div class="e-input-group">
        <input class="e-input" type="text" placeholder="Enter Date" />
        <span class="e-input-group-icon e-input-popup-date"></span>
      </div>

      <div class="e-input-group e-float-icon-left">
        <span class="e-input-group-icon e-input-date"></span>
        <div class="e-input-in-wrap">
          <input class="e-input" type="text" placeholder="Enter Date" />
        </div>
      </div>

      <div class="e-input-group e-float-icon-left">
        <span class="e-input-group-icon e-input-date"></span>
        <div class="e-input-in-wrap">
          <input class="e-input" type="text" placeholder="Enter Date" />
          <span class="e-input-group-icon e-input-down"></span>
        </div>
      </div>

      <h4> Floating label with icons </h4>

      <div class="e-float-input e-input-group">
        <input required type="text" />
        <span class="e-float-line"></span>
        <label class="e-float-text"> Enter Date </label>
        <span class="e-input-group-icon e-input-popup-date"></span>
      </div>

      <div class="e-float-input e-input-group e-float-icon-left">
        <span class="e-input-group-icon e-input-date"></span>
        <div class="e-input-in-wrap">
          <input required type="text" />
          <span class="e-float-line"></span>
          <label class="e-float-text"> Enter Date </label>
        </div>
      </div>

      <div class="e-float-input e-input-group e-float-icon-left">
        <span class="e-input-group-icon e-input-date"></span>
        <div class="e-input-in-wrap">
          <input required type="text" />
          <span class="e-float-line"></span>
          <label class="e-float-text"> Enter Date </label>
          <span class="e-input-group-icon e-input-down"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // To get the all input fields and its container.

  let inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

  // Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

  for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].addEventListener("focus", function () {
      let parentElement = inputElement[i].parentNode;
      if (parentElement.classList.contains('e-input-in-wrap')) {
        parentElement.parentNode.classList.add('e-input-focus');
      } else {
        inputElement[i].parentNode.classList.add('e-input-focus');
      }
    });
    inputElement[i].addEventListener("blur", function () {
      let parentElement = inputElement[i].parentNode;
      if (parentElement.classList.contains('e-input-in-wrap')) {
        parentElement.parentNode.classList.remove('e-input-focus');
      } else {
        inputElement[i].parentNode.classList.remove('e-input-focus');
      }
    });
  }

  // Add 'e-input-btn-ripple' class to the icon element for achive ripple effect when click on the icon.

  var inputIcon = document.querySelectorAll('.e-input-group-icon');
  for (let i = 0; i < inputIcon.length; i++) {
    inputIcon[i].addEventListener('mousedown', function () {
      inputElement[i].classList.add('e-input-btn-ripple');
    });
    inputIcon[i].addEventListener('mouseup', function () {
       
      setTimeout(function () {
        inputIcon[i].classList.remove('e-input-btn-ripple');
      }, 500);
    });
  }
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

#input-container .e-input-group {
  /* csslint allow: adjoining-classes */
  margin: 30px 0;
}

#input-container .e-float-input {
  /* csslint allow: adjoining-classes */
  margin: 30px 0;
}

.e-input-group-icon:before {
  font-family: e-icons;
}

.e-input-group .e-input-group-icon.e-input-popup-date {
  /* csslint allow: adjoining-classes */
  font-size: 16px;
}

.e-input-group.e-small .e-input-group-icon.e-input-popup-date {
  /* csslint allow: adjoining-classes */
  font-size: 14px;
}

.e-input-group-icon.e-input-popup-date:before {
  /* csslint allow: adjoining-classes */
  content: "";
}

.e-input-group-icon.e-input-up:before {
  /* csslint allow: adjoining-classes */
  content: '\e85e';
}

.e-input-group-icon.e-input-down:before {
  /* csslint allow: adjoining-classes */
  content: "";
}

.e-input-group-icon.e-input-plus:before {
  /* csslint allow: adjoining-classes */
  content: '\e7ba';
}

.e-input-group-icon.e-input-minus:before {
  /* csslint allow: adjoining-classes */
  content: '\e814';
}

.e-input-group-icon.e-input-date:before {
  /* csslint allow: adjoining-classes */
  content: "";
}

.e-input-group-icon.e-input-left:before {
  /* csslint allow: adjoining-classes */
  content: '\e904';
}

.e-input-group-icon.e-input-right:before {
  /* csslint allow: adjoining-classes */
  content: '\e913';
}

.e-input-group-icon.e-input-reload:before {
  /* csslint allow: adjoining-classes */
  content: '\e837';
}

.e-input-group-icon.e-input-search:before {
  /* csslint allow: adjoining-classes */
  content: '\e806';
}
</style>