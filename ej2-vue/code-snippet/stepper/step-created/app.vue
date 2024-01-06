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

<script>
import { StepperComponent, StepsDirective, StepDirective } from "@syncfusion/ej2-vue-navigations";
export default {
  components: {
    'ejs-stepper': StepperComponent,
    "e-steps": StepsDirective,
    "e-step": StepDirective
  },
  methods: {
    stepCreated: function(args) {
      //Your required action here
    }
  }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-base/styles/material.css";

  .created-event {
    margin-top: 30px;
    padding: 30px;
  }
</style>