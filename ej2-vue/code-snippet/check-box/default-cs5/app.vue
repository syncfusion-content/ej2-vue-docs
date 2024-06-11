<template>
<ul>
<li><ejs-checkbox label='Buy Groceries' cssClass='e-custom' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Pay Rent' cssClass='e-custom'></ejs-checkbox></li>
<li><ejs-checkbox label='Make Dinner' cssClass='e-custom'></ejs-checkbox></li>
<li><ejs-checkbox label='Finish To-do List Article' cssClass='e-custom'></ejs-checkbox></li>
</ul>
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
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

li {
  list-style: none;
}

.e-checkbox-wrapper {
  margin-top: 18px;
}

.e-custom .e-frame {
  border-radius: 100%;
}

.e-checkicon.e-checkbox-wrapper .e-frame.e-check::before {
    content: '\e77d';
}

.e-checkicon.e-checkbox-wrapper .e-check {
    font-size: 8.5px;
}

.e-checkicon.e-checkbox-wrapper .e-frame.e-check {
    background-color: white;
    border-color: grey;
    color: grey;
}

.e-checkicon.e-checkbox-wrapper:hover .e-frame.e-check {
    background-color: white;
    border-color: grey;
    color: grey;
}

.e-checkicon.e-checkbox-wrapper .e-checkbox:focus + .e-frame.e-check {
    background-color: white;
    border-color: grey;
    box-shadow: none;
    color: grey;
}
</style>