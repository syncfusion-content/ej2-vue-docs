

<template>
<ejs-progressbutton :content="content" ref="progressbutton" :enableProgress="true" duration=15000 :begin="begin" :end="end" :progress="progress" cssClass="cssClass"></ejs-progressbutton>
</template>

<script>
import Vue from 'vue';
import { ProgressButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ProgressButtonPlugin);

 export default {
    methods: {
    begin: function(args) {
        this.$refs.progressbutton.content = 'Progress ' + args.percent + '%';
    },
    progress: function(args) {
       this.$refs.progressbutton.content = 'Progress ' + args.percent + '%';
       if(args.percent === 40) {
            args.percent = 90
        }
    },
    end: function(args) {
        this.$refs.progressbutton.content = 'Progress ' + args.percent + '%';
    }
  },
  data () {
        return {
           content: "Progress Step",
           cssClass:   "e-hide-spinner"
    };
  }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
</style>


