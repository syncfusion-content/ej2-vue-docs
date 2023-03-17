
import Vue from 'vue';
import { ProgressButtonPlugin} from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ProgressButtonPlugin);


new Vue({
	el: '#app',
	template: `
 <ejs-progressbutton content='Progress Step' :enableProgress="true" cssClass="e-hide-spinner" :begin="begin"></ejs-progressbutton>
`,

    methods: {
    begin: function(args) {
        args.step = 20;
    }
  }

});