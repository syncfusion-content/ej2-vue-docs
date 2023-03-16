
import Vue from 'vue';
import { MaskedTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(MaskedTextBoxPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-maskedtextbox floatLabelType="Auto" placeholder="Enter a value"  mask="999-999-9999" v-model="value"></ejs-textbox>
    </div>
    <div id="wrapper2">
        <ejs-maskedtextbox floatLabelType="Auto" placeholder="Enter a value"  mask="999-999-9999" v-model="value"></ejs-textbox>
    </div>
</div>
`,

 data: function(){
        return {
            value: null
        }
    }

});