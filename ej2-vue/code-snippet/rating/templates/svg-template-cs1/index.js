
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

var emptyTemplate = Vue.component("emptyTemplate", {
template: `<svg width='35' height='25' className='e-rating-svg-icon'>
            <rect width='35' height='25' fill='transparent' strokeWidth='2' stroke='rgb(173,181,189)'/>
           </svg>`,
data() {
  return {
      data: {}
  };
}
});

var fullTemplate = Vue.component("fullTemplate", {
template: `<svg width="35" height="25" class="e-rating-svg-icon">
            <defs>
              <linearGradient :id="['grad'+data.index]" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop class="start" offset="0%" />
                <stop class="end" offset="100%" />
              </linearGradient>
            </defs>
            <rect width="35" height="25" :fill="['url(#grad'+data.index+')']" style="stroke-width:2;stroke:rgb(173,181,189)"/>
           </svg>`,
data() {
  return {
      data: {}
  };
}
});


new Vue({
	el: '#app',
	template: `
  <div class='wrap'>
      <ejs-rating id="rating" value="4" :emptyTemplate="emptyTemplate" :fullTemplate="fullTemplate" :enableAnimation="false" ></ejs-rating>
  </div>
`,

  data() {
    return {
      emptyTemplate: function(e) {
        return {
            template: emptyTemplate
        }
      },
      fullTemplate: function(e) {
        return {
            template: fullTemplate
        }
      }
    }
  }

});