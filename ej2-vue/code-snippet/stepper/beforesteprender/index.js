
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
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
`,
data: function () {
  return {
  };
},
methods: {
  beforeStepRender: function(args) {
    //Your required action here
  }
}
});