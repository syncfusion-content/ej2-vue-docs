
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="rtl-step">
      <ejs-stepper id="stepper" enableRtl="true">
        <e-steps>
          <e-step text='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step text='Delivery Address' iconCss='sf-icon-transport'></e-step>
          <e-step text='Payment' iconCss='sf-icon-payment' optional=true></e-step>
          <e-step text='Confirmation' iconCss='sf-icon-success'></e-step>
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