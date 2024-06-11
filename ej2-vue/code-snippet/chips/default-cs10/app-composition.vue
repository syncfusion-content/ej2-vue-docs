<template>
    <ejs-chiplist id="chip" selection="Single">
        <e-chips>
            <e-chip text="Small"></e-chip>
            <e-chip text="Medium"></e-chip>
            <e-chip text="Large"></e-chip>
            <e-chip text="Extra Large"></e-chip>
        </e-chips>
    </ejs-chiplist>
</template>

<script setup>
import { ChipListComponent as EjsChiplist, ChipsDirective as EChips, ChipDirective as EChip } from '@syncfusion/ej2-vue-buttons';
</script>