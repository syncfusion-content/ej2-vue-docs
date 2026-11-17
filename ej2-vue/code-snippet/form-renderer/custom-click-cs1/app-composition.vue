<template>
  <ejs-formrenderer :schema="schema" :buttonClick="onButtonClick"></ejs-formrenderer>
</template>

<script setup>
import { ref } from "vue";
import { FormRendererComponent, FormRendererPlugin } from "@syncfusion/ej2-vue-form-renderer";

const schema = {
  "version": "0.1.0",
  "properties": {
    "emailAddress": {
      "id": "textbox_1792584735912_973",
      "name": "emailAddress",
      "type": "string",
      "label": "Email Address",
      "textboxType": "email",
      "required": true,
      "widget": "textbox",
      "labelPosition": "top"
    },
    "password": {
      "id": "textbox_1792584735912_500",
      "name": "password",
      "type": "string",
      "label": "Password",
      "textboxType": "password",
      "required": true,
      "minLength": 6,
      "widget": "textbox",
      "labelPosition": "top"
    },
    "rememberMe": {
      "id": "checkbox_1792584735912_491",
      "name": "remember",
      "type": "boolean",
      "label": "Remember Me",
      "widget": "checkbox"
    },
    "submit": {
      "id": "default-submit-button",
      "name": "defaultSubmit",
      "type": "button",
      "label": "Submit",
      "buttonType": "submit",
      "widget": "button",
      "allowMultiple": true,
      "style": "primary",
      "buttonsGroups": [
        {
          "label": "Cancel",
          "type": "button",
          "style": "error",
          "iconCss": "",
          "iconPosition": "Left",
          "disabled": false
        },
        {
          "label": "Submit",
          "type": "submit",
          "style": "primary",
          "iconCss": "",
          "iconPosition": "Left",
          "disabled": false
        }
      ],
      "gap": "16px"
    }
  },
  "layout": [
    {
      "type": "field",
      "propertyId": "emailAddress"
    },
    {
      "type": "field",
      "propertyId": "password"
    },
    {
      "type": "field",
      "propertyId": "rememberMe"
    },
    {
      "type": "field",
      "propertyId": "submit"
    }
  ],
  "settings": {
    "name": "Untitled Form"
  }
};

const onButtonClick = (args) => {
  console.log("buttonClick event fired:", args);
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-renderer/index.css";
</style>
