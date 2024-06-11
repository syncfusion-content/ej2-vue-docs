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

<script>
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-vue-buttons';
export default {
name: "App",
components: {
"ejs-chiplist":ChipListComponent,
"e-chips":ChipsDirective,
"e-chip":ChipDirective
},
}
</script>