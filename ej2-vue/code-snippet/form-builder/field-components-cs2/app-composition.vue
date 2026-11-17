<template>
  <ejs-formbuilder :toolboxCategories="toolBoxCategories" ref="formObj">
  </ejs-formbuilder>
</template>

<script setup>
import { ref, provide } from "vue";
import {
  FormBuilderComponent as EjsFormbuilder,
  FormBuilderPlugin
} from "@syncfusion/ej2-vue-form-builder";
import {
  ComponentCategory,
  FormWidgetType
} from "@syncfusion/ej2-form-builder";

provide("FormBuilderPlugin", [FormBuilderPlugin]);

const formObj = ref(null);

const toolBoxCategories = [
        {
            category: ComponentCategory.Basic,
            items: [
                FormWidgetType.Textbox, FormWidgetType.Textarea
            ]
        },
        {
            category: ComponentCategory.Advanced,
            items: [
                FormWidgetType.Date, FormWidgetType.DateRange
            ]
        },
        {
            category: ComponentCategory.Layout,
            items: [
                FormWidgetType.Panel, FormWidgetType.Card
            ]
        }
    ];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-builder/index.css";
</style>