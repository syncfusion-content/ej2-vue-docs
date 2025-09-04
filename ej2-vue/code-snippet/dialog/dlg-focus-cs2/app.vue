<template>
  <div>
    <div id="dialogTarget" class="control-section" style="height:300px; position:relative;">
      <!-- Render Button to open the Dialog -->
      <ejs-button id="dlgbtn" @click="dialogBtnClick">open</ejs-button>

      <!-- Render Dialog -->
      <ejs-dialog
        id="dialog"
        ref="Dialog"
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

<script>
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-dialog": DialogComponent
  },
  data: function() {
    return {
      target: "#dialogTarget",
      header: "Delete Multiple Items",
      content: "Are you sure you want to permanently delete all of these items?",
      width: "300px",
      height: "auto",
      animationSettings: { effect: "Zoom" },
      buttons: [
        {
          buttonModel: { isPrimary: true, content: "Yes" },
          click: this.dlgButtonClick
        },
        {
          buttonModel: { content: "No" },
          click: this.dlgButtonClick
        }
      ]
    };
  },
  methods: {
    dialogBtnClick() {
      this.$refs.Dialog.show();
    },
    dlgButtonClick() {
      this.$refs.Dialog.hide();
    },
    beforeClose(args) {
      args.preventFocus = true;
    }
  }
};
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
