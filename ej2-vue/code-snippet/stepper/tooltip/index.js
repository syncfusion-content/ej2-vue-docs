
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="step-tooltip">
      <ejs-stepper id="stepper" showTooltip="true">
        <e-steps>
          <e-step label='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step label='Shipped' iconCss='sf-icon-transport'></e-step>
          <e-step label='Payment' iconCss='sf-icon-transport'></e-step>
          <e-step label='Delivered' iconCss='sf-icon-success'></e-step>
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