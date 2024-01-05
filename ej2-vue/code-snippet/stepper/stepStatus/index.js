
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
    <div class="stepper-section">
      <ejs-stepper id="stepper" ref="stepper" :stepChanged="stepChanged">
        <e-steps>
          <e-step label='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step label='Payment' iconCss='sf-icon-payment'></e-step>
          <e-step label='Ordered' iconCss='sf-icon-success'></e-step>
        </e-steps>
      </ejs-stepper>
      <div id="paymentStatus" style="margin-top: 50px">Your payment has not started yet</div>
    </div>
  </template>
`,
data: function () {
  return {
  };
},
methods: {
  stepChanged: function() {
    this.updateStatus(this.$refs.stepper.ej2Instances.steps[1].status);
  },
  updateStatus: function (stepStatus) {
    let statusMap = {
      'NotStarted': { text: 'Your payment has not started yet', color: '#e74d4d' },
      'InProgress': { text: 'Processing your payment', color: 'orange' },
      'Completed': { text: 'Payment successful', color: '#4CAF50' }
    };

    let currentStatus = document.getElementById("paymentStatus");
    if (currentStatus) {
        let { text, color } = statusMap[stepStatus];
        currentStatus.innerText = text;
        currentStatus.style.backgroundColor = color;
    }
  }
}
});