<template>
  <ejs-formbuilder ref="formObj">
  </ejs-formbuilder>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import {
  FormBuilderComponent as EjsFormbuilder,
  FormBuilderPlugin
} from "@syncfusion/ej2-vue-form-builder";
import { FormWidgetType } from "@syncfusion/ej2-form-builder";

provide("FormBuilderPlugin", [FormBuilderPlugin]);

const formObj = ref(null);

onMounted(() => {
  formObj.value.ej2Instances.setProperty(FormWidgetType.Textarea, {
    key: "enableRtl",
    label: "Enable RTL",
    type: "boolean",
    default: false
  });
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-builder/index.css";
</style>