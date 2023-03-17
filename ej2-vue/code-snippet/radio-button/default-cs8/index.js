
import Vue from 'vue';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);

;
new Vue({
	el: '#app',
	template: `
<ul>
<li><div id="text">Selected: Option 1</div></li>
<li> <ejs-radiobutton label="Option 1" name="default" checked="true" :change="onChange" ></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Option 2" name="default" disabled="true" :change="onChange"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Option 3" name="default" :change="onChange"></ejs-radiobutton></li>
</ul>
`,

  methods: {
    onChange: function(args) {
      document.getElementById('text').innerText = 'Selected : ' + args.event.target.ej2_instances[0].label;
    }
  }

});