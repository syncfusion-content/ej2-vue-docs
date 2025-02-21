
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
;
new Vue({
	el: '#app',
	template: `
<div class="col-lg-12 control-section">
  <div class="slider-content_wrapper">
    <div class="slider_container" id="slider_wrapper">
      <div class="slider_labelText userselect">Dynamic ticks color</div>
      <!-- Ticks slider element -->
      <ejs-slider id='ticks_slider' :value='value' :min='min' :max='max' :type='type' :step='step' :ticks='ticks'
        :renderingTicks='renderingTicks'></ejs-slider>
    </div>
    <div class="slider_container">
      <div class="slider_labelText userselect">Ticks with legends</div>
      <!-- Ticks slider element -->
      <ejs-slider id='slider' :value='value' :min='min' :max='max' :type='type' :ticks='slider_ticks'
        :renderedTicks='renderedTicks'></ejs-slider>
    </div>
  </div>
</div>
`,

data: function () {
  return {
    count: 1,
    value: 20,
    min: 0,
    max: 100,
    step: 5,
    type: 'MinRange',
    ticks: { placement: 'Before', largeStep: 20 },
    slider_ticks: { placement: 'Both', largeStep: 20, smallStep: 5 },
  };
},

methods: {
  renderingTicks: function (args) {
    if (args.tickElement.classList.contains('e-large')) {
      args.tickElement.classList.add('e-custom');
    }
  },
  renderedTicks: function (args) {
    let li = args.ticksWrapper.getElementsByClassName('e-large');
    let remarks = ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good', 'Excellent'];
    for (let i = 0; i < li.length; ++i) {
      li[i].querySelectorAll('.e-tick-both')[1].innerText = remarks[i];
    }
  }
}

});