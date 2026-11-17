import Vue from "vue";
import {
    FormBuilderPlugin,
    FormBuilderComponent
} from "@syncfusion/ej2-vue-form-builder";

Vue.use(FormBuilderPlugin);

new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-formbuilder :allowExport="false" ref="formObj">
        </ejs-formbuilder>
    </div>
`
});