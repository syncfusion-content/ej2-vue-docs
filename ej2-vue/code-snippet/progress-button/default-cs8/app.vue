<template>
 <ejs-progressbutton content='Progress Step' :enableProgress="true" cssClass="e-hide-spinner" :begin="begin"></ejs-progressbutton>
</template>

<script>

import { ProgressButtonComponent} from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
name: "App",
components: {
"ejs-progressbutton":ProgressButtonComponent
},
    methods: {
    begin: function(args) {
        args.step = 20;
    }
  }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
</style>