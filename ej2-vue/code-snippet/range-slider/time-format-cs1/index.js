
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
      minVal: new Date(2013, 6, 13, 11).getTime(),
      maxVal: new Date(2013, 6, 13, 17).getTime(),
      value: new Date(2013, 6, 13, 13).getTime(),
      stepVal: 3600000,
      // Slider ticks customization
      ticks: { placement: "After", largeStep: 2 * 3600000 }
    };
  },
  methods: {
    onTooltipChange(args) {
      let totalMiliSeconds = Number(args.text);
      let custom = { hour: "2-digit", minute: "2-digit" };
      args.text = new Date(totalMiliSeconds).toLocaleTimeString(
        "en-us",
        custom
      );
    },
    onRenderingTicks(args) {
      let totalMiliSeconds = Number(args.value);
      let custom = { hour: "2-digit", minute: "2-digit" };
      args.text = new Date(totalMiliSeconds).toLocaleTimeString(
        "en-us",
        custom
      );
    }
  }

});