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

<script>

import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-vue-navigations";

export default {
name: "App",
  components: {
    'ejs-stepper': StepperComponent,
    "e-steps": StepsDirective,
    "e-step": StepDirective
  },
  methods: {
    stepChanging: function(args) {
      alert("Step changing from " + args.previousStep + " to " + args.activeStep)
    }
  }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

  .stepChanging-event {
    margin-top: 30px;
    padding: 30px;
  }
</style>