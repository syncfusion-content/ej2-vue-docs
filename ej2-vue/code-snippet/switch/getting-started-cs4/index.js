
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SwitchPlugin);

;
new Vue({
	el: '#app',
	template: `
  <ejs-switch ref="toggleSwitch" checked=true :created="created"></ejs-switch>
`,

  methods: {
    created: function(args) {
      this.$refs.toggleSwitch.toggle();
    }
  }

});