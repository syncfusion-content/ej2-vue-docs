<template>
  <div class="stepChanging-event">
    <ejs-stepper id="stepper" :stepChanging="stepChanging">
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

const stepChanging = (args) => {
  alert("Step changing from " + args.previousStep + " to " + args.activeStep)
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

.stepChanging-event {
  margin-top: 30px;
  padding: 30px;
}
</style>