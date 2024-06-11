<template>
  <div class="wrap">

    <form id="form-element" class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-3 control-label">Select Date</div>
        <div class="col-sm-6">
          <ejs-datepicker id="datepicker" name="date" class="form-control" placeholder="Select a date"></ejs-datepicker>
          <div class="error-element"></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>

import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
import { FormValidator } from "@syncfusion/ej2-vue-inputs";
import {onMounted} from 'vue';

onMounted(() => {
  var options = {
    rules: {
      date: { required: [true, "Select any value"] }
    },
    customPlacement: function (element, errorElement) {
      document.querySelector(".error-element").appendChild(errorElement);
    },
  };
  // defines FormValidator to validate the TimePicker
  new FormValidator("#form-element", options);
});

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
.wrap {
  margin-top: 10px;
}
.error-element {
  margin-top: 5px;
}
#list_event {
  margin-top: 60px;
  padding-left: 5px;
  min-width: 200px;
}

#evt {
  border: 1px solid #dcdcdc;
  padding: 10px;
  min-width: 10px;
}

.eventarea {
  min-width: 250px;
}

#EventLog b {
  color: #388e3c;
}

.evtbtn {
  margin-top: 40px;
  margin-left: 70px;
}
</style>