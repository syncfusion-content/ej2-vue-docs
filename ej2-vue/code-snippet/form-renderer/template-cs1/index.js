import Vue from "vue";
import { FormRendererPlugin, FormRendererComponent } from "@syncfusion/ej2-vue-form-renderer";

Vue.use(FormRendererPlugin);

new Vue({
    el: '#app',
    template: `
        <ejs-formrenderer id="form-renderer-control" ref="formRenderer" :schema="schema" @submit="onSubmit">
            <e-customwidgetsettings>
                <e-customwidgetsetting :type="'textbox'" :template="'textboxTemplate'" />
            </e-customwidgetsettings>

            <template v-slot:textboxTemplate="{ data }">
                <input :id="'form-renderer-control-' + data.fieldData.id" class="e-input"
                    :type="data.fieldData && data.fieldData.textboxType || data.textboxType || 'text'"
                    :name="data.fieldData && data.fieldData.name || data.name"
                    :placeholder="data.fieldData && data.fieldData.placeholder"
                    :value="data.value || ''"
                    @input="setFieldValue(data, $event)" />
            </template>
        </ejs-formrenderer>
`,

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
    },
    methods: {
        setFieldValue: function (data, event) {
            var target = event.target;
            var value = target.value;
            var formRenderer = this.$refs.formRenderer;
            if (formRenderer && typeof formRenderer.setFieldValue === 'function') {
                formRenderer.setFieldValue(data.fieldData.id, value);
            }
        },
        onSubmit: function (args) {
            if (args && args.data) {
                console.log("Submit event fired:", args);
                console.log(args.data, args.isValid);
            }
        }
    }
});