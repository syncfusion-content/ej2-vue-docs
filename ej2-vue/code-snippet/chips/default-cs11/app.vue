<template>
    <ejs-chiplist id="chip" selection="Multiple">
        <e-chips>
            <e-chip text="Chai"></e-chip>
            <e-chip text="Chang"></e-chip>
            <e-chip text="Aniseed Syrup"></e-chip>
            <e-chip text="Ikura"></e-chip>
        </e-chips>
    </ejs-chiplist>
</template>

<script>
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-vue-buttons';
export default {
name: "App",
components: {
"ejs-chiplist":ChiplistComponent,
"e-chips":ChipsDirective,
"e-chip":ChipDirective
}
}
</script>