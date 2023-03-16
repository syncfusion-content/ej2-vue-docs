
import Vue from 'vue';
import { NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(NumericTextBoxPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-numerictextbox floatLabelType="Auto" placeholder="Enter a value" v-model="value"></ejs-numerictextbox>
    </div>
    <div id="wrapper2">
        <ejs-numerictextbox floatLabelType="Auto" placeholder="Enter a value" v-model="value"></ejs-numerictextbox>
    </div>
</div>
`,

 data: function(){
        return {
            value: null
        }
    }

});