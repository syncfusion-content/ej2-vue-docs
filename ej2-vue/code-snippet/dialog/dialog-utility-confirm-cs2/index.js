
import Vue from 'vue';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);
Vue.use(DialogUtility);


new Vue({
	el: '#app',
	template: `
    <div>
        <center><ejs-button ref='button' id="dialogbtn" cssClass="e-info" v-on:click.native="dialogBtnClick">Open Confirm Dialog</ejs-button></center>
    </div>
`,

    data: function() {
        return { }
    },
    methods: {
        dialogBtnClick: function() {
            DialogUtility.confirm('This is a Confirmation Dialog!');
        }
    }

});