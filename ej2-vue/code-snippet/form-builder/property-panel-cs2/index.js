import Vue from "vue";
import {
    FormBuilderPlugin,
    FormBuilderComponent
} from "@syncfusion/ej2-vue-form-builder";
import { FormWidgetType } from "@syncfusion/ej2-form-builder";

Vue.use(FormBuilderPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-formbuilder :enablePreview="false" ref="formObj">
        </ejs-formbuilder>
    </div>
`,
    mounted() {
        const instance = this.$refs.formObj.ej2Instances;
        const labelProp = instance.getProperty(FormWidgetType.Textarea, "label");
        if (labelProp) {
            labelProp.visible = false;
        }
        instance.refresh();
    }
});