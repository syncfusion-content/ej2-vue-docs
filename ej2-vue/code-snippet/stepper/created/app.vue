<template>
  <ejs-stepper id="stepper" :created="created">
    <e-steps>
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
  name: "App",
  components: {
    'ejs-stepper': StepperComponent,
    "e-steps": StepsDirective,
    "e-step": StepDirective
  },
  methods: {
    created: function () {
      //Your required action here
    }
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/stepper/index.css";
</style>