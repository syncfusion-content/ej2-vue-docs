

<template>
  <div class='wrap'>
      <ejs-rating id="rating" value="4" :emptyTemplate="emptyTemplate" :fullTemplate="fullTemplate" :enableAnimation="false" ></ejs-rating>
  </div>
</template>

<script>
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

export default {
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
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
margin: 50px auto;
text-align: center;
}

/* To change the size between items */
.e-rating-container .e-rating-item-container {
padding: 0px;
}

/* To set the gradient color */
.e-rating-svg-icon #grad0 .start {
stop-color: #FF0000;
}

.e-rating-svg-icon #grad0 .end,
.e-rating-svg-icon #grad1 .start {
stop-color: #ff5101;
}

.e-rating-svg-icon #grad1 .end,
.e-rating-svg-icon #grad2 .start {
stop-color: #ffc801;
}

.e-rating-svg-icon #grad2 .end,
.e-rating-svg-icon #grad3 .start {
stop-color: #dbe300;
}

.e-rating-svg-icon #grad3 .end,
.e-rating-svg-icon #grad4 .start {
stop-color: #8bc301;
}

.e-rating-svg-icon #grad4 .end {
stop-color: #4eaa01;
}

</style>


