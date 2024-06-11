<template>
    <ejs-chiplist id="chip" text="Janet Leverling"></ejs-chiplist>
</template>

<script>
import { ChipListComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: "App",
    components: {
        'ejs-chiplist': ChipListComponent
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
</style>