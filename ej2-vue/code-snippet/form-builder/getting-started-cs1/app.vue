<template>
  <ejs-formbuilder ref="formObj"></ejs-formbuilder>
</template>

<script>
import { FormBuilderComponent, FormBuilderPlugin } from "@syncfusion/ej2-vue-form-builder";

//Component registration
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
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-builder/index.css";
</style>