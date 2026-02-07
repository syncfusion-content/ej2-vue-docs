<template>
  <div class="step-text">
    <ejs-stepper id="stepper" stepType="indicator">
      <e-steps>
        <e-step text='A'></e-step>
        <e-step text='B'></e-step>
        <e-step text='C'></e-step>
        <e-step text='D'></e-step>
      </e-steps>
    </ejs-stepper>
    <ejs-stepper id="labelStepper">
      <e-steps>
        <e-step label='Cart'></e-step>
        <e-step label='Delivery Address'></e-step>
        <e-step label='Payment'></e-step>
        <e-step label='Confirmation'></e-step>
      </e-steps>
    </ejs-stepper>
  </div>
</template>
<script setup>

import { StepperComponent as EjsStepper, StepsDirective as ESteps, StepDirective as EStep } from "@syncfusion/ej2-vue-navigations";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";

.step-text {
  margin-top: 30px;
  padding: 30px;
}

#labelStepper {
  margin-top: 50px;
}
</style>