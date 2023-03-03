
import Vue from 'vue';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);


new Vue({
	el: '#app',
	template: `
        <div class="multiline">
            <ejs-textbox ref="textareaObj" id='default' :multiline="true" value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' placeholder="Enter your address" floatLabelType="Auto" :input= "inputHandler" :created= "createHandler"></ejs-textbox>
        </div>
    </div>
`,

 data: function(){
        return {
            createHandler: (args) => {
                this.$refs.textareaObj.addAttributes({rows: 1});
                this.$refs.textareaObj.$el.style.height = "auto";
                this.$refs.textareaObj.$el.style.height = (this.$refs.textareaObj.$el.scrollHeight)+"px";
            },
            inputHandler: (args) => {
                args.event.currentTarget.style.height = "auto";
                args.event.currentTarget.style.height = (args.event.currentTarget.scrollHeight)+"px";
            }
        }
    }

});