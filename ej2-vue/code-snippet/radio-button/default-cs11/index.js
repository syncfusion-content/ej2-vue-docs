
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SwitchPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div id="wrapper1">
<ejs-switch v-model="value" :checked="value"></ejs-switch>
</div>
<div id="wrapper2">
<ejs-switch v-model="value" :checked="value"></ejs-switch>
</div>
</div>
`,

  data(){
    return{
      value: true
    }
  }

});