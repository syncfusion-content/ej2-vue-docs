
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="disabled-step">
      <ejs-stepper id="stepper">
        <e-steps>
          <e-step iconCss='sf-icon-cart'></e-step>
          <e-step iconCss='sf-icon-transport'></e-step>
          <e-step iconCss='sf-icon-payment' disabled="true"></e-step>
          <e-step iconCss='sf-icon-success'></e-step>
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