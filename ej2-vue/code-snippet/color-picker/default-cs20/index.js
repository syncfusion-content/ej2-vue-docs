
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ColorPickerPlugin);


new Vue({
	el: '#app',
	template: `
<div>
<div class='wrapper1'>
    <h4>Choose Color</h4>
    <ejs-colorpicker v-model="value"></ejs-colorpicker>
</div>
<div class="wrapper2">
<h4>Choose Color</h4>
    <ejs-colorpicker v-model="value"></ejs-colorpicker>
`,

    data(){
        return{
            value: null
        }
    }

});