<template>
  <ejs-stepper id="stepper" :beforeStepRender="beforeStepRender">
    <e-steps>
      <e-step></e-step>
      <e-step></e-step>
      <e-step></e-step>
      <e-step></e-step>
    </e-steps>
  </ejs-stepper>
</template>

<script setup>

import { StepperComponent as EjsStepper, StepsDirective as ESteps, StepDirective as EStep } from "@syncfusion/ej2-vue-navigations";

const beforeStepRender = () => {
  //Your required action here
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
</style>