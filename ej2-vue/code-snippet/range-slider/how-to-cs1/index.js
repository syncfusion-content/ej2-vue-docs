
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class="wrap">
      <ejs-slider
        id="ticks"
        :min="minVal"
        :max="maxVal"
        :value="value"
        :tooltip="tooltip"
        :ticks="ticks"
        showButtons="true"
        :step="stepVal"
        v-on:renderingTicks="onRenderingTicks"
        v-on:tooltipChange="onTooltipChange"
      ></ejs-slider>
    </div>
  </div>
`,

  data: function() {
    return {
      tooltip: { placement: "Before", isVisible: true },
      minVal: new Date("2013-06-13").getTime(),
      maxVal: new Date("2013-06-21").getTime(),
      value: new Date("2013-06-15").getTime(),
      stepVal: 86400000,
      // Slider ticks customization
      ticks: { placement: "After", largeStep: 2 * 86400000 }
    };
  },
  methods: {
    onTooltipChange(args) {
      let totalMiliSeconds = Number(args.text);
      // Convert the current milliseconds to the respective date in desired format
      let custom = { year: "numeric", month: "short", day: "numeric" };
      args.text = new Date(totalMiliSeconds).toLocaleDateString(
        "en-us",
        custom
      );
    },
    onRenderingTicks(args) {
      let totalMiliSeconds = Number(args.value);
      // Convert the current milliseconds to the respective date in desired format
      let custom = { year: "numeric", month: "short", day: "numeric" };
      args.text = new Date(totalMiliSeconds).toLocaleDateString(
        "en-us",
        custom
      );
    }
  }

});