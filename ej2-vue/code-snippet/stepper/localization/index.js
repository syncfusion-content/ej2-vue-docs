
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";
import { L10n } from '@syncfusion/ej2-base';

Vue.use(StepperPlugin);
L10n.load({
  'fr-BE': {
      'stepper': {
      'optional': "facultatif"
    }
  }
});

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="step-locale">
    <ejs-stepper id="stepper" :locale='locale'>
      <e-steps>
        <e-step label='Cart' iconCss='sf-icon-cart'></e-step>
        <e-step label='Delivery Address' iconCss='sf-icon-transport'></e-step>
        <e-step label='Payment' iconCss='sf-icon-payment' optional=true></e-step>
        <e-step label='Confirmation' iconCss='sf-icon-success'></e-step>
      </e-steps>
    </ejs-stepper>
  </div>
</template>
`,
data: function () {
  return {
    locale: 'fr-BE'
  };
}
});