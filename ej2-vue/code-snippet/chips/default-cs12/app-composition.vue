<template>
  <ejs-chiplist id="chip" v-on:click="chipclick">
    <e-chips>
      <e-chip text="Send a text"></e-chip>
      <e-chip text="Set a remainder"></e-chip>
      <e-chip text="Read my emails"></e-chip>
      <e-chip text="Set alarm"></e-chip>
    </e-chips>
  </ejs-chiplist>
</template>

<script setup>

import { ChipListComponent as EjsChiplist, ChipsDirective as EChips, ChipDirective as EChip } from '@syncfusion/ej2-vue-buttons';
const chipclick = function (e) {
  alert('you have clicked ' + e.text);
}

</script>