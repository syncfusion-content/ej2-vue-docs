
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-rating id="rating" value="3" cssClass="custom-icon" ></ejs-rating>
    </div>
`,

});