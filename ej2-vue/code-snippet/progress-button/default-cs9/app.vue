<template>
  <ejs-progressbutton :content="content" ref="progressbutton" :enableProgress="true" duration=15000 :begin="begin"
    :end="end" :progress="progress" cssClass="cssClass"></ejs-progressbutton>
</template>

<script>

import { ProgressButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


export default {
  name: "App",
  components: {
    "ejs-progressbutton": ProgressButtonComponent
  },
  methods: {
    begin: function (args) {
      this.$refs.progressbutton.content = 'Progress ' + args.percent + '%';
    },
    progress: function (args) {
      this.$refs.progressbutton.content = 'Progress ' + args.percent + '%';
      if (args.percent === 40) {
        args.percent = 90
      }
    },
    end: function (args) {
      this.$refs.progressbutton.content = 'Progress ' + args.percent + '%';
    }
  },
  data() {
    return {
      content: "Progress Step",
      cssClass: "e-hide-spinner"
    };
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/progress-button/index.css";
</style>