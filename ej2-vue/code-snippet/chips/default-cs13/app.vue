<template>
    <ejs-chiplist id="chip" enableDelete="true">
        <e-chips>
            <e-chip text="Send a text"></e-chip>
            <e-chip text="Set a remainder"></e-chip>
            <e-chip text="Read my emails"></e-chip>
            <e-chip text="Set alarm"></e-chip>
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
  methods: {
    chipclick: function(e) {
      alert('you have clicked ' + e.target.textContent);
    }
  }
}
</script>