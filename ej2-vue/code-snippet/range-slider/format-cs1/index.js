
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <div >
    <div class='label'>Slider without formatted values</div>
    <ejs-slider id='slider1' :value='value' :tooltip="tooltip" :ticks="ticks" :step="step" :type="type" :showButtons="showButtons"> </ejs-slider>
    </div>
    <div class="sliderwrapper">
    <div class='label'>Slider with formatted values</div>
    <ejs-slider id='slider2' :tooltip="wktooltip" :ticks="wkticks" :step="wkstep" :max="wkmax" :min="wkmin" :renderingTicks="renderingTicks" :tooltipChange="tooltipChange"> </ejs-slider>
    </div>
  </div>
`,

  data() {
    return {
        ticks: { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true },
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        value: 30,
        step: 10,
        type: 'MinRange',
        showButtons: true,
        wkmin: 0, wkmax: 6, wkstep: 1,
        // Assigning ticks data
        wkticks: {  placement: 'After',  largeStep: 1 },
        // Assigning tooltip data
        wktooltip: {
            placement: 'Before',
            isVisible: true,
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