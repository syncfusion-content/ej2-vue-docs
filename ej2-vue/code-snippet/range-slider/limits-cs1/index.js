
import Vue from 'vue';
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
      <div class="col-lg-8 control-section">
            <div class="content-wrapper">
                <div class="sliderwrap">
                    <label class="userselect">MinRange Slider With Limits</label>
                    <ejs-slider id="minrange" min=0 max=100 value=30  step=1 type='MinRange' :ticks='ticks' :limits='limits' :tooltip='tooltip'></ejs-slider>
                </div>
                <div class="sliderwrap">
                    <label class="userselect">Range Slider With Limits</label>
                    <ejs-slider id="range" min=0 max=100 :value='value' step=1 type='Range' :ticks='rangeTicks' :tooltip='rangeTooltip' :limits='rangeLimits'></ejs-slider>
                </div>
            </div>
        </div>
   </div>
`,

  data: function() {
    return {
            ticks:{ placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
            limits: { enabled: true, minStart: 10, minEnd: 40 },
            tooltip:{ isVisible: true, placement: 'Before', showOn: 'Focus' },
            rangeTicks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
            rangeLimits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 },
            rangeTooltip:{ isVisible: true, placement: 'Before', showOn: 'Focus' },
            value:[30,70]
    };
  }

});