import Vue from "vue";
import {
    FormBuilderPlugin,
    FormBuilderComponent
} from "@syncfusion/ej2-vue-form-builder";
import {
    ComponentCategory,
    FormWidgetType
} from "@syncfusion/ej2-form-builder";

Vue.use(FormBuilderPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-formbuilder :toolboxCategories="toolBoxCategories" ref="formObj">
        </ejs-formbuilder>
    </div>
`,
    data() {
        return {
            toolBoxCategories: [
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
            ]
        };
    }
});