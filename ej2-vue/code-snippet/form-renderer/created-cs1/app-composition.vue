<template>
  <ejs-formrenderer :schema="schema" :created="onCreated"></ejs-formrenderer>
</template>

<script setup>
import { ref } from "vue";
import { FormRendererComponent, FormRendererPlugin } from "@syncfusion/ej2-vue-form-renderer";

const schema = {
  version: "0.1.0",
  properties: {
    emailAddress: {
      id: "textbox_1785491685456_167",
      name: "emailAddress",
      type: "string",
      label: "Email Address",
      textboxType: "email",
      required: true,
      widget: "textbox"
    },
    password: {
      id: "textbox_1785491685456_537",
      name: "password",
      type: "string",
      label: "Password",
      textboxType: "password",
      required: true,
      minLength: 6,
      widget: "textbox"
    },
    rememberMe: {
      id: "checkbox_1785491685456_262",
      name: "rememberMe",
      type: "boolean",
      label: "Remember Me",
      widget: "checkbox"
    }
  },
  layout: [
    { type: "field", propertyId: "emailAddress" },
    { type: "field", propertyId: "password" },
    { type: "field", propertyId: "rememberMe" }
  ],
  settings: {
    name: "Untitled Form"
  }
};

const onCreated = () => {
  console.log("Form is created");
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-renderer/index.css";
</style>
