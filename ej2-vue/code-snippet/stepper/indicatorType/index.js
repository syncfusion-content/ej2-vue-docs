
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="step-indicator">
      <ejs-stepper id="stepper" stepType="indicator">
          <e-steps>
            <e-step></e-step>
            <e-step></e-step>
            <e-step></e-step>
            <e-step></e-step>
          </e-steps>
      </ejs-stepper>
      <ejs-stepper id="stepper1" stepType="indicator">
          <e-steps>
            <e-step text="1"></e-step>
            <e-step text="2"></e-step>
            <e-step text="3"></e-step>
            <e-step text="4"></e-step>
          </e-steps>
      </ejs-stepper>
    </div>
</template>
`,
data: function () {
  return {
  };
}
});