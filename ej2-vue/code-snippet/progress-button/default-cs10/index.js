
import Vue from 'vue';
import { ProgressButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ProgressButtonPlugin);

var vue = 
new Vue({
	el: '#app',
	template: `
<ejs-progressbutton  ref="progressBtn" :content="content" :iconCss="iconCss" :enableProgress="true" :cssClass="cssClass" v-on:click.native="clickHanlder" :end="end"></ejs-progressbutton>
`,

 methods: {
    clickHanlder: function(event) {
        if(vue.content === 'Download') {
            vue.content = 'Pause';
            vue.iconCss = 'e-btn-sb-icon e-pause';
        }
        // clicking on ProgressButton will stop the progress when the text content is 'Pause'
        else if(vue.content === 'Pause') {
            vue.content = 'Resume';
            vue.iconCss = 'e-btn-sb-icon e-play';
            this.$refs.progressBtn.stop();
        }
        // clicking on ProgressButton will start the progress when the text content is 'Resume'
        else if(vue.content === 'Resume') {
            vue.content = 'Pause';
            vue.iconCss = 'e-btn-sb-icon e-pause';
            this.$refs.progressBtn.start();
        }
    },
    end: function(args) {
      vue.content = 'Download';
      vue.iconCss = 'e-btn-sb-icon e-download';
    }
  },
   data () {
        return {
           content: "Download",
           cssClass: "e-hide-spinner",
           iconCss: "e-btn-sb-icon e-download"
    };
  }

});