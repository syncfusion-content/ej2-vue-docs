
import Vue from 'vue';
import { RatingPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <label>Full Precision</label><br/>
        <ejs-rating id="rating1" value="3" precision="Full"></ejs-rating><br/>
        <label>Half Precision</label><br/>
        <ejs-rating id="rating2" value="2.5" precision="Half"></ejs-rating><br/>
        <label>Quarter Precision</label><br/>
        <ejs-rating id="rating3" value="3.75" precision="Quarter"></ejs-rating><br/>
        <label>Exact Precision</label><br/>
        <ejs-rating id="rating4" value="2.3" precision="Exact"></ejs-rating><br/>
    </div>
`,

});