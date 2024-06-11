<template>
<form>
<ul>
<li><ejs-checkbox name='Sport' value='Cricket' label='Cricket' checked=true></ejs-checkbox></li>
<li><ejs-checkbox name='Sport' value='Hockey' label='Hockey' checked=true></ejs-checkbox></li>
<li><ejs-checkbox name='Sport' value='Tennis' label='Tennis' disabled=true></ejs-checkbox></li>
<li><ejs-checkbox name='Sport' value='Basketball' label='Basketball'></ejs-checkbox></li>
<li><ejs-button isPrimary=true>Submit</ejs-button></li>
</ul>
</form>
</template>

<script setup>

import { CheckBoxComponent as EjsCheckbox , ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-checkbox-wrapper {
  margin-top: 18px;
}

button {
  margin: 20px 0 0 5px;
}

li {
  list-style: none;
}
</style>