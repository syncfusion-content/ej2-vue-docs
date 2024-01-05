
import Vue from 'vue';
import { StepperPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(StepperPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div class="stepTypes">
    <div class="e-btn-group">
      <input type="radio" id="default" name="stepType" value="default" v-on:click="updateType" checked />
      <label class="e-btn" for="default">Default</label>
      <input type="radio" id="indicator" name="stepType" value="indicator" v-on:click="updateType" />
      <label class="e-btn" for="indicator">Indicator</label>
      <input type="radio" id="label" name="stepType" value="label" v-on:click="updateType" />
      <label class="e-btn" for="label">Label</label>
    </div>
    <div class="stepType-stepper-control">
      <ejs-stepper id="stepper" ref="stepper" stepType="default">
        <e-steps>
          <e-step label='Cart' iconCss='sf-icon-cart'></e-step>
          <e-step label='Delivery Address' iconCss='sf-icon-transport'></e-step>
          <e-step label='Payment' iconCss='sf-icon-payment' optional=true></e-step>
          <e-step label='Confirmation' iconCss='sf-icon-success'></e-step>
        </e-steps>
      </ejs-stepper>
    </div>
  </div>
</template>
`,
data: function () {
  return {
  };
},
methods: {
  updateType: function (args) {
    this.$refs.stepper.ej2Instances.stepType = args.currentTarget.value;
  }
}
});