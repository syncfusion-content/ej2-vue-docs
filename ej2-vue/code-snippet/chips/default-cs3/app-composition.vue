<template>
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" leadingIconCss='andrew'></e-chip>
            <e-chip text="Janet" leadingIconCss='janet'></e-chip>
            <e-chip text="Laura" leadingIconCss='laura'></e-chip>
            <e-chip text="Margaret" leadingIconCss='margaret'></e-chip>
        </e-chips>
    </ejs-chiplist>
</template>

<script setup>
import { ChipListComponent as EjsChiplist, ChipsDirective as EChips, ChipDirective as EChip } from '@syncfusion/ej2-vue-buttons';
</script>

<style>
#chip .andrew {
  background-image: url('./andrew.png')
}

#chip .margaret {
  background-image: url('./margaret.png')
}

#chip .laura {
  background-image: url('./laura.png')
}

#chip .janet {
  background-image: url('./janet.png')
}
</style>