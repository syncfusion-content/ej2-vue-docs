<template>
  <div id='container' class="e-bigger">
    <ejs-button>Button</ejs-button>
  </div>
</template>
<script>

import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent
},
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>