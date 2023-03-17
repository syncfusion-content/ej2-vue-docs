
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-rating id="rating" value="4" emptyTemplate="<img src='star-emptytemplate.png' widht='25' height='25' />" fullTemplate="<img src='star-fulltemplate.png' widht='25' height='25' />" ></ejs-rating>
    </div>
`,

});