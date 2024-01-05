<template>
  <div class="animation-container">
    <ejs-stepper id="stepper" :animation="animation">
      <e-steps>
        <e-step></e-step>
        <e-step></e-step>
        <e-step></e-step>
        <e-step></e-step>
      </e-steps>
    </ejs-stepper>
  </div>
</template>

<script>
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-vue-navigations";
export default {
  components: {
    'ejs-stepper': StepperComponent,
    "e-steps": StepsDirective,
    "e-step": StepDirective
  },
  data() {
    return {
      animation: { enable:true, delay: '500', duration: '2000' }
    };
  }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-base/styles/material.css";

  .animation-container {
    margin-top: 30px;
    padding: 30px;
  }
</style>