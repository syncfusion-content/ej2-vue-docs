<template>
            <ejs-formrenderer id="form-renderer-control" ref="formRenderer" :schema="schema" @submit="onSubmit">
                <e-customwidgetsettings>
                    <e-customwidgetsetting :field-name="'emailAddress'" :template="'textboxTemplate'" />
                </e-customwidgetsettings>
                <template v-slot:textboxTemplate="{ data }">
                    <input :id="`form-renderer-control-${data.fieldData.id}`" class="e-input"
                        :type="data.fieldData?.textboxType || data.textboxType || 'text'"
                        :name="data.fieldData?.name || data.name" :placeholder="data.fieldData?.placeholder"
                        :value="data.value || ''" @input="setFieldValue(data, $event)" />
                </template>
            </ejs-formrenderer>
</template>

<script>
import {
    FormRendererComponent,
    CustomWidgetSettingsDirective,
    CustomWidgetSettingDirective
} from '@syncfusion/ej2-vue-form-renderer';

export default {
    components: {
        'ejs-formrenderer': FormRendererComponent,
        'e-customwidgetsettings': CustomWidgetSettingsDirective,
        'e-customwidgetsetting': CustomWidgetSettingDirective
    },
    data() {
        return {
            schema: {
                "version": "0.1.0",
                "properties": {
                    "emailAddress": {
                        "id": "textbox_1785491685456_167",
                        "name": "emailAddress",
                        "type": "string",
                        "label": "Email Address",
                        "textboxType": "email",
                        "required": true,
                        "placeholder": "Enter your email",
                        "widget": "textbox",
                    },
                    "password": {
                        "id": "textbox_1785491685456_537",
                        "name": "password",
                        "type": "string",
                        "label": "Password",
                        "textboxType": "password",
                        "required": true,
                        "minLength": 6,
                        "placeholder": "Enter your password",
                        "widget": "textbox"
                    },
                    "rememberMe": {
                        "id": "checkbox_1785491685456_262",
                        "name": "rememberMe",
                        "type": "boolean",
                        "label": "Remember Me",
                        "widget": "checkbox"
                    },
                    "submit": {
                        "id": "submit_button_initial",
                        "name": "defaultFormsubmit",
                        "type": "button",
                        "label": "Submit",
                        "buttonType": "submit",
                        "widget": "button",
                        "style": "primary",
                        "disabled": false
                    }
                },
                "layout": [
                    {
                        "type": "field",
                        "propertyId": "emailAddress"
                    },
                    {
                        "type": "field",
                        "propertyId": "password"
                    },
                    {
                        "type": "field",
                        "propertyId": "rememberMe"
                    },
                    {
                        "type": "field",
                        "propertyId": "submit"
                    }
                ],
                "settings": {
                    "name": "Untitled Form"
                }
            }
        };
    },
    methods: {
        setFieldValue(data, event) {
            const value = event.target.value;
            const formRenderer = this.$refs.formRenderer;
            formRenderer?.setFieldValue(data.fieldData.id, value);
        },
        onSubmit(args) {
            if (args.data) {
                console.log(args.data, args.isValid);
            }
        }
    }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-renderer/index.css";
</style>
