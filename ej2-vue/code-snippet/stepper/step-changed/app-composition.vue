<template>
  <div class="stepChanged-event">
    <ejs-stepper id="stepper" :stepChanged="stepChanged">
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

const stepChanged = (args) => {
  alert("Step Changed from " + args.previousStep + " to " + args.activeStep)
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

.stepChanged-event {
  margin-top: 30px;
  padding: 30px;
}
</style>