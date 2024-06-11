<template>
<ejs-checkbox label='Default' enableRtl=true></ejs-checkbox>
</template>

<script setup>

import { CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


export default {}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-checkbox-wrapper {
  margin-top: 18px;
}
</style>