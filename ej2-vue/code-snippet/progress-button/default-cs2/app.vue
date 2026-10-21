<template>
 <ejs-progressbutton content="Spin Left"></ejs-progressbutton>
</template>

<script>
import { ProgressButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
name: "App",
  components: {
    'ejs-progressbutton': ProgressButtonComponent
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/progress-button/index.css";
</style>