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
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-vue-buttons';
export default {
name: "App",
components: {
"ejs-chiplist":ChipListComponent,
"e-chips":ChipsDirective,
"e-chip":ChipDirective
}
}
</script>