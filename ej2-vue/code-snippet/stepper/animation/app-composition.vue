<template>
  <div class="animation-container">
    <ejs-stepper id="stepper" :animation="animation">
      <e-steps>
        <e-step title="1"></e-step>
        <e-step title="2"></e-step>
        <e-step title="3"></e-step>
        <e-step title="4"></e-step>
      </e-steps>
    </ejs-stepper>
  </div>
</template>
<script setup>

import { StepperComponent as EjsStepper, StepsDirective as ESteps, StepDirective as EStep } from "@syncfusion/ej2-vue-navigations";

const animation = { enable: true, delay: '500', duration: '2000' };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

.animation-container {
  margin-top: 30px;
  padding: 30px;
}
</style>