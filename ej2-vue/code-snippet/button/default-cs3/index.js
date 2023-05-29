
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-button cssClass='e-link' v-on:click.native='btnClick'>Button</ejs-button>
`,

    methods : {
        btnClick: function(event) {
            window.open("https://www.google.com");
        }
    }

});