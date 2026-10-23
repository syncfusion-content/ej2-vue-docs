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
        this.$refs.formObj.ej2Instances.setProperty(FormWidgetType.Textarea, {
            key: "enableRtl",
            label: "Enable RTL",
            type: "boolean",
            default: false
        });
    }
});