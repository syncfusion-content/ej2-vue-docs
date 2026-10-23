<template>
  <ejs-formrenderer :schema="schema" :submit="onSubmit"></ejs-formrenderer>
</template>

<script>
import { FormRendererComponent, FormRendererPlugin } from "@syncfusion/ej2-vue-form-builder";

//Component registration
export default {
  name: "App",
  provide: {
    FormRendererPlugin: [FormRendererPlugin]
  },
  components: {
    "ejs-formrenderer": FormRendererComponent,
  },
data() {
    return {
      schema: {
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
          },
          cancel: {
            id: "submit_button_initial",
            name: "defaultFormsubmit",
            type: "button",
            label: "Submit",
            buttonType: "submit",
            widget: "button",
            style: "primary",
            disabled: false
          }
        },
        layout: [
          { type: "field", propertyId: "emailAddress" },
          { type: "field", propertyId: "password" },
          { type: "field", propertyId: "rememberMe" },
          { type: "field", propertyId: "submit" }
        ],
        settings: {
          name: "Untitled Form"
        }
      }
    };
  },
  methods: {
    onSubmit: function (args) {
      if (args && args.data) {
        // `args.data` holds the form values, `args.isValid` indicates whether
        // every required/validation rule passed.
        console.log(args.data, args.isValid);
      }
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-renderer/index.css";
</style>