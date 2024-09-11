<template>
<div>
    <ejs-button cssClass='e-primary'>Button</ejs-button>
</div>
</template>

<script>
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ButtonPlugin);

export default {}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';

button {
  margin: 25px 5px 20px 20px;
}
:root {
	--color-sf-primary: #6886a4;
}
</style>