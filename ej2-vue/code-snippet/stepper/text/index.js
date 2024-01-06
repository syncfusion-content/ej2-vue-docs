
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="step-text">
      <ejs-stepper id="stepper" stepType="indicator">
        <e-steps>
          <e-step text='A'></e-step>
          <e-step text='B'></e-step>
          <e-step text='C'></e-step>
          <e-step text='D'></e-step>
        </e-steps>
      </ejs-stepper>
      <ejs-stepper id="labelStepper">
        <e-steps>
          <e-step label='Cart'></e-step>
          <e-step label='Delivery Address'></e-step>
          <e-step label='Payment'></e-step>
          <e-step label='Confirmation'></e-step>
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