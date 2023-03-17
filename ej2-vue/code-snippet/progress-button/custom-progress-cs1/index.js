
import Vue from 'vue';
import { ProgressButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple} from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ProgressButtonPlugin);


new Vue({
	el: '#app',
	template: `
 <ejs-progressbutton ref="progressbutton" :content="content"  duration=4000 :enableProgress="true" :cssClass="cssClass" :begin ="begin" :end="end"></ejs-progressbutton>
`,

methods: {
    begin: function(args) {
        this.$refs.progressbutton.content = 'Uploading...';
        this.$refs.progressbutton.cssClass = 'e-hide-spinner e-info';
    },
    end: function(args) {
        this.$refs.progressbutton.content = 'Success...';
        this.$refs.progressbutton.cssClass = 'e-hide-spinner e-success';
       setTimeout(()=>{
             this.$refs.progressbutton.content = 'Upload';
             this.$refs.progressbutton.cssClass = 'e-hide-spinner';
        }, 500)
   }
},
    data () {
        return {
           content: "Upload",
           cssClass:   "e-hide-spinner"
    };
  }

});