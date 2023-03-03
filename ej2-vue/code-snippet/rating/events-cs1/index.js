
import Vue from 'vue';
import { RatingPlugin, RatingChangedEventArgs  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-rating id="rating" :valueChanged="valueChanged"></ejs-rating>
    </div>
`,

    methods : {
        valueChanged: function(args: RatingChangedEventArgs) {
          alert("Previous Value:"+args.previousValue+"\nValue:"+args.value);
        }
    }

});