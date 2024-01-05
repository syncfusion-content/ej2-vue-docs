
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="animation-container">
      <ejs-stepper id="stepper" :animation="animation">
        <e-steps>
          <e-step></e-step>
          <e-step></e-step>
          <e-step></e-step>
          <e-step></e-step>
        </e-steps>
      </ejs-stepper>
    </div>
  </template>
`,
data: function () {
  return {
    animation: { enable:true, delay: '500', duration: '2000' }
  };
}
});