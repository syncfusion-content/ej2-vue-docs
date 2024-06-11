<template>
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Andrew" avatarIconCss='andrew'></e-chip>
            <e-chip text="Janet" avatarIconCss='janet'></e-chip>
            <e-chip text="Laura" avatarIconCss='laura'></e-chip>
            <e-chip text="Margaret" avatarIconCss='margaret'></e-chip>
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

<style>
#chip .andrew {
  background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/andrew.png')
}

#chip .margaret {
  background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/margaret.png')
}

#chip .laura {
  background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/laura.png')
}

#chip .janet {
  background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/janet.png')
}
</style>