
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);

let initialCount = 0;
let repeatCount = 0;

new Vue({
	el: '#app',
	template: `
<div id="container">
  <div class="frame">
    <h3>Repeat Button</h3>
    <p style="font-size: 13px; color: #555; margin-top: 0;">
      Hold the button to fire continuous <code>clicked</code> events. The counters below track initial clicks
      vs. repeat fires.
    </p>

    <ejs-button
      id="repeat-btn"
      :enableRepeat="true"
      :repeatDelay="repeatDelay"
      :repeatInterval="repeatInterval"
      :disabled="isDisabled"
      @clicked="onClicked"
    >
      Hold Me
    </ejs-button>

    <div class="controls">
      <label>
        Repeat Delay (ms)
        <input type="number" id="delay-input" v-model.number="repeatDelay" min="0" step="50">
      </label>
      <label>
        Repeat Interval (ms)
        <input type="number" id="interval-input" v-model.number="repeatInterval" min="0" step="50">
      </label>
      <label class="inline">
        <input type="checkbox" id="disabled-toggle" v-model="isDisabled">
        Disabled
      </label>
    </div>

    <div class="counter-display">
      <div class="counter-box">
        <div class="label">Initial Clicks</div>
        <div class="value" id="initial-count">{{ initialCount }}</div>
      </div>
      <div class="counter-box repeat">
        <div class="label">Repeat Clicks</div>
        <div class="value" id="repeat-count">{{ repeatCount }}</div>
      </div>
    </div>

    <span class="reset-link" id="reset-btn" @click="resetCounts">Reset counters</span>
  </div>
</div>
`,
	data() {
		return {
			initialCount: 0,
			repeatCount: 0,
			repeatDelay: 400,
			repeatInterval: 100,
			isDisabled: false
		};
	},
	methods: {
		onClicked(args) {
			if (args.isRepeat) {
				this.repeatCount++;
			} else {
				this.initialCount++;
			}
		},
		resetCounts() {
			this.initialCount = 0;
			this.repeatCount = 0;
		}
	}
});
