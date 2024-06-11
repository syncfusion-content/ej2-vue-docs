<template>
  <div id="app">
    <div class='wrap'>
      <form id="form-element" class="form-horizontal">
        <div class="form-group" style="padding-top: 11px;">
          <div class="col-lg-8">
            <ejs-datepicker id="datepicker" name="date" :change="onValueChange" class="form-control"
              placeholder='Select a date'></ejs-datepicker>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>

import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
import { FormValidator } from '@syncfusion/ej2-inputs';
import { onMounted } from "vue";


let formObj = '';
const options = {
  customPlacement: function (inputelement, errorElement) {
    var parentElement = inputelement.closest('.form-group');
    parentElement.appendChild(errorElement);
  },
  rules: {
    'date': {
      required: true
    }
  }
};

onMounted(() => {
  formObj = new FormValidator('#form-element', options);
});

const onValueChange = function () {
  formObj.validate();
}


</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
  margin: 0 auto;
  width: 240px;
}
</style>