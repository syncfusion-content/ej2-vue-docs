<template>
  <div>
    <div id="target" class="control-section" style="height: 300px; position: relative;">
      <!-- Render Button to open the Dialog -->
      <ejs-button id="openBtn" @click="openDialog">Open</ejs-button>

      <!-- Render Dialog -->
      <ejs-dialog
        id="dialog"
        ref="dialogRef"
        :header="header"
        :content="content"
        :showCloseIcon="true"
        :buttons="buttons"
        :target="target"
        :width="width"
        :height="height"
        :animationSettings="animationSettings"
        :beforeClose="beforeClose"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const dialogRef = ref(null);
const target = 'body';
const header = 'Delete Multiple Items';
const content = 'Are you sure you want to permanently delete all of these items?';
const width = '300px';
const height = 'auto';
const animationSettings = { effect: 'Zoom' };

const openDialog = () => {
  dialogRef.value.show();
};

const closeDialog = () => {
  dialogRef.value.hide();
};

const beforeClose = (args) => {
  args.preventFocus = true;
};

const buttons = [
  {
    buttonModel: { isPrimary: true, content: 'Yes' },
    click: closeDialog,
  },
  {
    buttonModel: { content: 'No' },
    click: closeDialog,
  },
];
</script>

<style>

body {
  padding-top: 100px;
}

.control-section {
  height: 100%;
  min-height: 200px;
}
</style>
