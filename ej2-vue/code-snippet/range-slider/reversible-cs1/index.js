
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id="reverse"
                    ref="reverseSlider"
                    :min="min"
                    :max="max"
                    :tooltip="tooltip"
                    v-model="reversevalue"
                    :type="rangetype"
                    :orientation="orientation"
                    :ticks="ticks" ></ejs-slider>
  </div>
`,

  data() {
    return {
      reversevalue: [30, 70],
      min: 100,
      max: 0,
      rangetype: 'Range',
      orientation: 'Vertical',
      ticks: {
        placement: 'Before',
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true,
      },
      tooltip: { isVisible: true, placement: 'Before' },      
    };
  }

});