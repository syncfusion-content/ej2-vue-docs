

<template>
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew"></e-chip>
            <e-chip text="Janet"></e-chip>  
            <e-chip text="Laura"></e-chip>
            <e-chip text="Margaret"></e-chip>
        </e-chips>
    </ejs-chiplist>
</template>

<script>
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);

export default {}
</script>



