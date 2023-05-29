
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <form>
        <ejs-button type='submit'>Submit</ejs-button>
        <ejs-button type='reset'>Reset</ejs-button>
    </form>
`,

});