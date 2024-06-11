<template>
    <form>
        <ejs-button type='submit'>Submit</ejs-button>
        <ejs-button type='reset'>Reset</ejs-button>
    </form>
</template>

<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
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

button {
  margin: 25px 5px 20px 20px;
}
</style>