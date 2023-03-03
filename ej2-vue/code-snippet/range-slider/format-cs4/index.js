
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='events' :value='value' :tooltip="tooltip" :ticks="ticks" :min="min" :max="max" :renderingTicks="renderingTicks" :tooltipChange="tooltipChange"></ejs-slider>
  </div>
`,

  data() {
    return {
       // Minimum value
        min: 0,
        // Maximum value
        max: 6,
        // Slider current value
        value: 2,
        // Assigning ticks data
        ticks: {
            placement: 'After',
            largeStep: 1
        },
        // Assigning tooltip data
        tooltip: {
            placement: 'Before',
            isVisible: true
        }
    };
  },
  methods: {
       renderingTicks: function (args) {
                // Weekdays Array
                var daysArr = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
                // Customizing each ticks text into weeksdays
                args.text = daysArr[parseFloat(args.value)];
        },
        tooltipChange: function (args) {
                // Customizing tooltip to display the Day (in numeric) of the week
                args.text =  'Day ' + (Number(args.value) + 1).toString();
        }
  }

});