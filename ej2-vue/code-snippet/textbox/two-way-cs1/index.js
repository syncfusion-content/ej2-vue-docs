
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-textbox floatLabelType="Auto" placeholder="Enter a name" v-model="value"></ejs-textbox>
    </div>
    <div id="wrapper2">
        <ejs-textbox floatLabelType="Auto" placeholder="Enter a name" v-model="value"></ejs-textbox>
    </div>
</div>
`,

 data: function(){
        return {
            value: null
        }
    }

});