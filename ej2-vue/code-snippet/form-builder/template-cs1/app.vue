
<template>
    <div>
        <ejs-form-builder id="form-builder-control" ref="formObj" :schema="schema">
            <e-toolboxitemsettings>
                <e-toolboxitemsetting :type="formType" :template="'textboxTemplate'" />
            </e-toolboxitemsettings>
            <template v-slot:textboxTemplate="{ data }">
                <input :id="`form-builder-control-${data.fieldData?.id || data.id}`" class="e-input"
                    :type="data.fieldData?.textboxType || data.textboxType || 'text'"
                    :name="data.fieldData?.name || data.name" :placeholder="data.fieldData?.placeholder"
                    :value="data.value || ''" @input="setFieldValue(data, $event)" />
            </template>
        </ejs-form-builder>
    </div>
</template>

<script lang="ts">
import {
    FormBuilderComponent as EjsFormBuilder,
    ToolboxItemSettingsDirective as EToolboxitemsettings,
    ToolboxItemSettingDirective as EToolboxitemsetting
} from '@syncfusion/ej2-vue-form-builder';
import { FormWidgetType } from '@syncfusion/ej2-form-builder';

export default {
    components: {
        EjsFormBuilder,
        EToolboxitemsettings,
        EToolboxitemsetting
    },
    data() {
        return {
            formType: FormWidgetType.Textbox,
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
        setFieldValue(data: any, event: Event) {
            const value = (event.target as HTMLInputElement).value;
            const formObj = this.$refs.formObj as InstanceType<typeof EjsFormBuilder> | undefined;
            formObj?.setFieldValue(data.fieldData?.id || data.id, value);
        }
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/form-builder/index.css";
</style>
