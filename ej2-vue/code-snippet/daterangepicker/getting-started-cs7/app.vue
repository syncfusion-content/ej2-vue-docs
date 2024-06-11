<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-daterangepicker :placeholder="waterMark" :cssClass="classVal"></ejs-daterangepicker>
    </div>
  </div>
</template>
<script>

import { DateRangePickerComponent } from '@syncfusion/ej2-vue-calendars';

export default {
  name: "App",
  components: {
    "ejs-daterangepicker": DateRangePickerComponent
  },
  data() {
    return {
      waterMark: "Select a Range",
      classVal: "customCSS"
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
  max-width: 250px;
  margin: 0 auto;
}

.customCSS .e-calendar .e-content .e-selected span.e-day,
/* csslint allow: adjoining-classes*/
.customCSS .e-calendar .e-content .e-selected span.e-day:hover,
/* csslint allow: adjoining-classes*/
.customCSS .e-calendar .e-content .e-today.e-selected:hover span.e-day,
/* csslint allow: adjoining-classes*/
.customCSS .e-calendar .e-content .e-today.e-selected span.e-day,
/* csslint allow: adjoining-classes*/
.customCSS .e-calendar .e-content .e-selected:hover span.e-day

/* csslint allow: adjoining-classes*/
  {
  background-color: #35b86b;
}

.customCSS .e-calendar .e-content .e-today span.e-day,
/* csslint allow: adjoining-classes*/
.customCSS .e-calendar .e-content .e-focused-date.e-today span.e-day {
  /* csslint allow: adjoining-classes*/
  border: 1px solid #35b86b;
  color: #ff3337;

}

.customCSS .e-calendar .e-content .e-weekend span {
  /* csslint allow: adjoining-classes*/
  color: #ff3337;
}

.customCSS.e-date-range-wrapper .e-input-group-icon.e-icons.e-active,
/* csslint allow: adjoining-classes*/
.customCSS .e-btn.e-flat,
/* csslint allow: adjoining-classes*/
.customCSS .e-btn.e-flat:hover {
  /* csslint allow: adjoining-classes*/
  color: #35b86b;
}
</style>