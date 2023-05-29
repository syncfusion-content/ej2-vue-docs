
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div>
    <div>
        <input type='button' value='Input Button' class='e-btn e-link' />
    </div>
    <br>
    <div>
        <a id='anchorbtn' class='e-btn e-primary' href='#'>Google</a>
    </div>
</div>
`,

});