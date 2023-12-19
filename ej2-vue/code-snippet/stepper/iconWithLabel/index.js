
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="iconWithLabel">
    <ejs-stepper id="stepper">
        <e-steps>
          <e-step label='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step label='Address' iconCss='sf-icon-user'></e-step>
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