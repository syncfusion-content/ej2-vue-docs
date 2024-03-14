
import Vue from 'vue';
import { TextAreaPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
    <div class ='wrap'>
        <div id ='input-container'>
            <ejs-textarea id='default'></ejs-textarea>
        </div>
    </div>
`,

   data: function() {
        return { }
    };

});