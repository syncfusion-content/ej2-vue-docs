
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="stepChanged-event">
      <ejs-stepper id="stepper" :stepChanged="stepChanged">
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
  stepChanged: function(args) {
    alert("Step Changed from " + args.previousStep + " to " + args.activeStep)
  }
}
});