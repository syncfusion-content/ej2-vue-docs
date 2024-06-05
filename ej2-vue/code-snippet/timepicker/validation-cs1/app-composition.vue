<template>
  <div id="app">
    <div class='wrap'>
      <form id="form-element" class="form-horizontal">
        <div class="form-group" style="padding-top: 11px;">
          <div class="col-lg-8">
            <ejs-timepicker id="time" name="time" :change="onTimeChange" class="form-control"
              placeholder='Select a Time'></ejs-timepicker>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>

import { TimePickerComponent as EjsTimepicker } from "@syncfusion/ej2-vue-calendars";
import { FormValidator } from '@syncfusion/ej2-inputs';
import { onMounted } from 'vue';

let formObj = '';
const options = {
  customPlacement: function (inputelement, errorElement) {
    var parentElement = inputelement.closest('.form-group');
    parentElement.appendChild(errorElement);

  },
  rules: {
    'time': {
      required: true
    }
  }
};

onMounted(() => {
  formObj = new FormValidator('#form-element', options);
});

const onTimeChange = () => {
  formObj.validate();
};

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrap {
  margin: 0 auto;
  width: 240px;
}
</style>