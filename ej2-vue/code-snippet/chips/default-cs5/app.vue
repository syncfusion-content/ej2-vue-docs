<template>
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" avatarText= 'A'></e-chip>
            <e-chip text="Janet" avatarText= 'J'></e-chip>
            <e-chip text="Laura" avatarText= 'L'></e-chip>
            <e-chip text="Margaret" avatarText= 'M'></e-chip>
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