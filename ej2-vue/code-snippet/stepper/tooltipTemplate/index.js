
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="step-tooltip-template">
      <ejs-stepper id="stepper" showTooltip="true" :tooltipTemplate="tooltipContent">
        <e-steps>
          <e-step text='Review your cart items' label='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step text='Enter your delivery address' label='Delivery Address' iconCss='sf-icon-transport'></e-step>
          <e-step text='Complete your purchase securely' label='Payment' iconCss='sf-icon-payment'></e-step>
          <e-step text='Verify your order details' label='Confirmation' iconCss='sf-icon-success'></e-step>
        </e-steps>
      </ejs-stepper>
    </div>
</template>
`,
data: function () {
  return {
    tooltipContent: '<span class="template-content"><span class="stepper-icon ${value.iconCss}"></span><span class="step-label">${value.text}</span></span>'
  };
}
});