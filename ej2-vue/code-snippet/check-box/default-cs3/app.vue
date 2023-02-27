

<template>
<ul>
<li><ejs-checkbox label='Checked State' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Unchecked State'></ejs-checkbox></li>
<li><ejs-checkbox label='Indeterminate State' indeterminate=true></ejs-checkbox></li>
</ul>
</template>

<script>
import Vue from 'vue';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);

export default {}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-checkbox-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}
</style>


