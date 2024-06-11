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