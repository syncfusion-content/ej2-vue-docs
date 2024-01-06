
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
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
`,
data: function () {
  return {
  };
},
methods: {
  stepChanging: function(args) {
    alert("Step changing from " + args.previousStep + " to " + args.activeStep)
  }
}
});