
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="step-validation">
    <ejs-stepper id="stepper">
      <e-steps>
        <e-step iconCss='sf-icon-cart' :isValid=true></e-step>
        <e-step iconCss='sf-icon-transport'></e-step>
        <e-step iconCss='sf-icon-payment' :isValid=false></e-step>
        <e-step iconCss='sf-icon-success'></e-step>
      </e-steps>
    </ejs-stepper>
    <ejs-stepper id="labelStep">
      <e-steps>
        <e-step label='Cart' :isValid=true></e-step>
        <e-step label='Address'></e-step>
        <e-step label='Payment' :isValid=false></e-step>
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