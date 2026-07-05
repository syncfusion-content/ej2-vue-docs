<template>
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
</template>

<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent
  },
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
};
</script>

<style scoped>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

body {
  font-family: Roboto, sans-serif;
  padding: 20px;
}

button {
  margin: 10px 5px;
}

.frame {
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 20px 30px;
  margin: 20px 0;
  max-width: 520px;
}

.frame h3 {
  margin-top: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.controls {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.controls label {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #555;
  gap: 4px;
}

.controls label.inline {
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.controls input[type="number"] {
  width: 80px;
  padding: 4px 6px;
  border: 1px solid #bbb;
  border-radius: 3px;
  font-size: 13px;
}

.counter-display {
  margin-top: 20px;
  display: flex;
  gap: 30px;
}

.counter-display .counter-box {
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 10px 18px;
  text-align: center;
  min-width: 110px;
}

.counter-display .counter-box .label {
  font-size: 12px;
  color: #888;
  margin-bottom: 4px;
}

.counter-display .counter-box .value {
  font-size: 28px;
  font-weight: 700;
  color: #333;
}

.counter-display .counter-box.repeat .value {
  color: #1565c0;
}

.reset-link {
  margin-top: 10px;
  font-size: 12px;
  color: #888;
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
}
</style>
