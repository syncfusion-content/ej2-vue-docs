<template>
<ejs-checkbox label='Default' enableRtl=true></ejs-checkbox>
</template>

<script>

import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
name: "App",
components: {
"ejs-checkbox":CheckBoxComponent,
},
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/check-box/index.css";
.e-checkbox-wrapper {
  margin-top: 18px;
}
</style>