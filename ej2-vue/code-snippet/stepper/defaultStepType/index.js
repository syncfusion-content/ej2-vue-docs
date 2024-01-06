
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="step-default">
    <ejs-stepper id="stepper" stepType="default">
        <e-steps>
          <e-step label='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step label='Delivery' iconCss='sf-icon-transport'></e-step>
          <e-step label='Payment' iconCss='sf-icon-payment'></e-step>
          <e-step label='Ordered' iconCss='sf-icon-success'></e-step>
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