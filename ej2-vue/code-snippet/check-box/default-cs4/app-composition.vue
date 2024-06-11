<template>
<ul>
<li><ejs-checkbox label='Primary' cssClass='e-primary' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Success' cssClass='e-success' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Info' cssClass='e-info' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Warning' cssClass='e-warning' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Danger' cssClass='e-danger' checked=true></ejs-checkbox></li>
</ul>
</template>

<script setup>
import { CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons';
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

.e-checkbox-wrapper.e-primary:hover .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #e03872;
}

.e-checkbox-wrapper.e-success .e-frame.e-check,
.e-checkbox-wrapper.e-success .e-checkbox:focus + .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #689f38;
}

.e-checkbox-wrapper.e-success:hover .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #449d44;
}

.e-checkbox-wrapper.e-info .e-frame.e-check,
.e-checkbox-wrapper.e-info .e-checkbox:focus + .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #2196f3;
}

.e-checkbox-wrapper.e-info:hover .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #0b7dda;
}

.e-checkbox-wrapper.e-warning .e-frame.e-check,
.e-checkbox-wrapper.e-warning .e-checkbox:focus + .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #ef6c00;
}

.e-checkbox-wrapper.e-warning:hover .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #cc5c00;
}

.e-checkbox-wrapper.e-danger .e-frame.e-check,
.e-checkbox-wrapper.e-danger .e-checkbox:focus + .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #d84315;
}

.e-checkbox-wrapper.e-danger:hover .e-frame.e-check { /* csslint allow: adjoining-classes */
  background-color: #ba3912;
}
</style>