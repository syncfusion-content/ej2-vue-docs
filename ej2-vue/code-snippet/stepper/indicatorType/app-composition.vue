<template>
  <div class="step-indicator">
    <ejs-stepper id="stepper" stepType="indicator">
      <e-steps>
        <e-step></e-step>
        <e-step></e-step>
        <e-step></e-step>
        <e-step></e-step>
      </e-steps>
    </ejs-stepper>
    <ejs-stepper id="stepper1" stepType="indicator">
      <e-steps>
        <e-step text="1"></e-step>
        <e-step text="2"></e-step>
        <e-step text="3"></e-step>
        <e-step text="4"></e-step>
      </e-steps>
    </ejs-stepper>
  </div>
</template>

<script setup>

import { StepperComponent as EjsStepper, StepsDirective as ESteps, StepDirective as EStep } from "@syncfusion/ej2-vue-navigations";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

.step-indicator {
  margin-top: 30px;
  padding: 30px;
}

#stepper1 {
  margin-top: 50px;
}
</style>