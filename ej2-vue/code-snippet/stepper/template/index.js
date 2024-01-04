
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="stepper-template-wrapper">
    <ejs-stepper id="stepper" :activeStep=1 :template="tempContent">
      <e-steps>
        <e-step label='PowerPoint' iconCss='sf-icon-powerpoint'></e-step>
        <e-step label='Presentation' iconCss='sf-icon-projector'></e-step>
        <e-step label='Backup' iconCss='sf-icon-onedrive'></e-step>
      </e-steps>
    </ejs-stepper>
  </div>
</template>
`,
data: function () {
  return {
    tempContent: '<div class="template-content"><span class="${step.iconCss}"></span><br><span class="e-label">${step.label}</span></div>'
  };
}
});