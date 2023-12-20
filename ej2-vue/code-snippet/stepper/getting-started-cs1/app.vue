<template>
  <ejs-stepper id="stepper">
        <e-steps>
          <e-step></e-step>
          <e-step></e-step>
          <e-step></e-step>
          <e-step></e-step>
          <e-step></e-step>
        </e-steps>
  </ejs-stepper>
</template>
<script>
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-vue-navigations";
export default {
    components: {
      'ejs-stepper': StepperComponent,
      "e-steps": StepsDirective,
      "e-step": StepDirective
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-base/styles/material.css";
</style>