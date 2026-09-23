---
layout: post
title: Exporting and Importing in Vue Form Builder control | Syncfusion
description: Learn how to export and import in the Vue Form Builder control. Use export to reuse the generated form schema in Form Renderer, and import to continue editing an existing schema in Form Builder.
platform: ej2-vue
control: Exporting and Importing
documentation: ug
domainurl: ##DomainURL##
---

# Exporting and Importing in Vue Form Builder component

The Vue Form Builder supports exporting the generated form schema for reuse in the Form Renderer control and importing an existing schema back into the builder for further editing.

## Export form schema

You can export the generated form schema by clicking the **Export** button in the toolbar at the top of the Form Builder control. The exported schema includes the form structure, field configuration, and other properties required to recreate the form.

You can use the exported schema in the Form Renderer control to render the same form at runtime.

## Disabling the export

Exporting can be disabled in the Form Builder component by setting the `allowExport` property to `false`. The default value of the property is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-formbuilder :allowExport="false" ref="formObj">
  </ejs-formbuilder>
</template>

<script setup>
import { provide } from "vue";
import {
  FormBuilderComponent as EjsFormbuilder,
  FormBuilderPlugin
} from "@syncfusion/ej2-vue-form-builder";

provide("FormBuilderPlugin", [FormBuilderPlugin]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css";
</style>

{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-formbuilder :allowExport="false" ref="formObj">
  </ejs-formbuilder>
</template>

<script>
import {
  FormBuilderComponent,
  FormBuilderPlugin
} from "@syncfusion/ej2-vue-form-builder";

export default {
  name: "App",
  provide: {
    FormBuilderPlugin: [FormBuilderPlugin]
  },
  components: {
    "ejs-formbuilder": FormBuilderComponent,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

The output will appear as follows:

![Disabling the export](./images/form-builder-export.png)

## Import form schema

To import a form, assign the exported schema to the `schema` property of the Form Builder. This loads the form definition into the builder so that you can continue editing it.

The following example shows how to use the same schema for both export and import scenarios.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-formbuilder :schema="schema" ref="formObj">
  </ejs-formbuilder>
</template>

<script setup>
import { ref, provide } from "vue";
import {
  FormBuilderComponent as EjsFormbuilder,
  FormBuilderPlugin
} from "@syncfusion/ej2-vue-form-builder";

provide("FormBuilderPlugin", [FormBuilderPlugin]);

const formObj = ref(null);
const schema = ref({
  version: "0.1.0",
  properties: {
    emailAddress: {
      id: "textbox_1785491685456_167",
      name: "emailAddress",
      type: "string",
      label: "Email Address",
      textboxType: "email",
      required: true,
      placeholder: "Enter your email",
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
      placeholder: "Enter your password",
      widget: "textbox"
    },
    rememberMe: {
      id: "checkbox_1785491685456_262",
      name: "rememberMe",
      type: "boolean",
      label: "Remember Me",
      widget: "checkbox"
    },
    submit: {
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
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css";
</style>

{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-formbuilder :schema="schema" ref="formObj">
  </ejs-formbuilder>
</template>

<script>
import {
  FormBuilderComponent,
  FormBuilderPlugin
} from "@syncfusion/ej2-vue-form-builder";

export default {
  name: "App",
  provide: {
    FormBuilderPlugin: [FormBuilderPlugin]
  },
  components: {
    "ejs-formbuilder": FormBuilderComponent
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
            placeholder: "Enter your email",
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
            placeholder: "Enter your password",
            widget: "textbox"
          },
          rememberMe: {
            id: "checkbox_1785491685456_262",
            name: "rememberMe",
            type: "boolean",
            label: "Remember Me",
            widget: "checkbox"
          },
          submit: {
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
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

![Import from schema](./images/form-builder-import-schema.png)
