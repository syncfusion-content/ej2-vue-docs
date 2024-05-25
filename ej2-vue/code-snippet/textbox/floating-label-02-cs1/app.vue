<template>
  <div class='wrap'>
    <div id='input-container'>
      <h4> Floating label without required attribute </h4>
      <div class="e-float-input">
        <input type="text" id='inpt1' />
        <span class="e-float-line"></span>
        <label class="e-float-text"> Enter Value </label>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data: function () {
    return {}
  },
  mounted: function () {
    /* To get the Input element */
    let inputElement = document.getElementById('inpt1');

    /* Update the label position based on Input value */
    updateLabelState(inputElement.value, inputElement.parentElement.querySelector('.e-float-text'));

    inputElement.addEventListener("focus", function () {
      let label = this.parentElement.querySelector('.e-float-text');
      label.classList.add('e-label-bottom');
      label.classList.remove('e-label-top');
    });

    inputElement.addEventListener("blur", function () {
      updateLabelState(this.value, this.parentElement.querySelector('.e-float-text'));
    });

    inputElement.addEventListener("input", function () {
      updateLabelState(this.value, this.parentElement.querySelector('.e-float-text'));
    });

    /* Update the label position based on Input value */

    /* e-label-top - Floats the label above of the TextBox */
    /* e-label-bottom - Label to be placed as placeholder for the TextBox */

    function updateLabelState(value, label) {
      if (value) {
        label.classList.add('e-label-top');
        label.classList.remove('e-label-bottom');
      } else {
        label.classList.add('e-label-bottom');
        label.classList.remove('e-label-top');
      }
    }
  }
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

#input-container .e-float-input {
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



