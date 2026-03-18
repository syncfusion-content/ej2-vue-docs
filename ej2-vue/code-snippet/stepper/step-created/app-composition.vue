<template>
  <div class="created-event">
    <ejs-stepper id="stepper" :created="stepCreated">
      <e-steps>
        <e-step></e-step>
        <e-step></e-step>
        <e-step></e-step>
        <e-step></e-step>
      </e-steps>
    </ejs-stepper>
  </div>
</template>
<script setup>

import { StepperComponent as EjsStepper, StepsDirective as ESteps, StepDirective as EStep } from "@syncfusion/ej2-vue-navigations";

const stepCreated = () => {
  //Your required action here
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

.created-event {
  margin-top: 30px;
  padding: 30px;
}
</style>