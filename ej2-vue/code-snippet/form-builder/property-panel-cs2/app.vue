<template>
  <ejs-formbuilder ref="formObj">
  </ejs-formbuilder>
</template>

<script>
import {
  FormBuilderComponent,
  FormBuilderPlugin
} from "@syncfusion/ej2-vue-form-builder";
import { FormWidgetType } from "@syncfusion/ej2-form-builder";

export default {
  name: "App",
  provide: {
    FormBuilderPlugin: [FormBuilderPlugin]
  },
  components: {
    "ejs-formbuilder": FormBuilderComponent
  },
  mounted() {
    const instance = this.$refs.formObj.ej2Instances;
    const labelProp = instance.getProperty(FormWidgetType.Textarea, "label");
    if (labelProp) {
      labelProp.visible = false;
    }
    instance.refresh();
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-builder/index.css";
</style>