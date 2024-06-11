<template>
    <ejs-chiplist id="chip" enableDelete="true">
        <e-chips>
            <e-chip text="Primary" cssClass="e-primary"></e-chip>
            <e-chip text="Success" cssClass="e-success"></e-chip>
            <e-chip text="Info" cssClass="e-info"></e-chip>
            <e-chip text="Warning" cssClass="e-warning"></e-chip>
            <e-chip text="Danger" cssClass="e-danger"></e-chip>
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