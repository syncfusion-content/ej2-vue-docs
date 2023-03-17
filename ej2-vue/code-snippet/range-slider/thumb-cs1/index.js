
import Vue from 'vue';
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

new Vue({
	el: '#app',
	template: `
   <div id='app'>
      <div class="col-lg-12 control-section">
            <div class="slider-content-wrapper">
                <div class="slider_container">
                    <div class="labelText slider-userselect">Square</div>
                    <!-- Square slider element -->
                    <ejs-slider id="square_slider" value=30 min=0 max=100></ejs-slider>
                </div>
                <div class="slider_container">
                    <div class="labelText slider-userselect">Circle</div>
                    <!-- Circle slider element -->
                    <ejs-slider id="circle_slider" min=0 max=100 value=30></ejs-slider>
                </div>
                <div class="slider_container">
                    <div class="labelText slider-userselect">Oval</div>
                    <!-- Oval slider element -->
                    <ejs-slider id="oval_slider" value=30 min=0 max=100></ejs-slider>
                </div>
                <div class="slider_container">
                    <div class="labelText slider-userselect">Custom image</div>
                    <!-- Image slider element -->
                    <ejs-slider id="image_slider" value=30 min=0 max=100 :ticks='ticks'></ejs-slider>
                </div>
            </div>
        </div>
   </div>
`,

  data: function() {
   return {
            ticks:{ placement: 'After'}
    };
  }

});