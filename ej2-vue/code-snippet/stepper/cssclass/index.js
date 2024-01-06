
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="stepper-customize">
    <ejs-stepper id="iconStepper">
      <e-steps>
        <e-step iconCss='sf-icon-cart' label='Cart'></e-step>
        <e-step iconCss='sf-icon-transport' label='Delivery Address'></e-step>
        <e-step iconCss='sf-icon-payment' label='Payment' cssClass="custom-step" optional=true></e-step>
        <e-step iconCss='sf-icon-success' label='Confirmation'></e-step>
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