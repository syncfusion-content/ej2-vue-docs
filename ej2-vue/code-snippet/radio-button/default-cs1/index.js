
import Vue from 'vue';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div id="wrapper1">
<ejs-checkbox label='Default' v-model="value" :checked="value"></ejs-checkbox>
</div>
<div id="wrapper2">
<ejs-checkbox label='Default' v-model="value" :checked="value"></ejs-checkbox>
</div>
</div>
`,

  data(){
    return{
      value: true
    }
  }

});