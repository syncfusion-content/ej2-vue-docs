
import Vue from 'vue';
import { ProgressButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ProgressButtonPlugin);


new Vue({
	el: '#app',
	template: `
 <ejs-progressbutton content="Slide Left" :enableProgress="true"  :animationSettings="animationSettings" :spinSettings="spinSettings"></ejs-progressbutton>
`,

    data () {
        return {
            animationSettings: { effect:'SlideLeft', duration: 500, easing: 'linear' },
            spinSettings: { position: 'Center' }
        };
    }

});