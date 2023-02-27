

<template>
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" trailingIconCss= 'e-dlt-btn'></e-chip>
            <e-chip text="Janet" trailingIconCss= 'e-dlt-btn'></e-chip>
            <e-chip text="Laura" trailingIconCss= 'e-dlt-btn'></e-chip>
            <e-chip text="Margaret" trailingIconCss= 'e-dlt-btn'></e-chip>
        </e-chips>
    </ejs-chiplist>
</template>

<script>
import Vue from 'vue';
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ChipListPlugin);

export default {

}
</script>



