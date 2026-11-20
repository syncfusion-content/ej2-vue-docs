---
layout: post
title: Templates in Angular Form Builder control | Syncfusion
description: Learn how to include Templates in the Angular Form Builder control to display third party components.
platform: ej2-javascript
control: Templates
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Angular Form Builder component

Templates can be used in the Form Builder control to display third-party components within the form. This feature lets you configure the form schema with the properties of the third-party component.

This section explains how to use templates in the Form Builder component.

## Adding Templates

Templates can be added to the Form Builder by configuring the third-party control in the `<e-toolboxitemsetting>`.
Use the `<e-toolboxitemsetting>` directive inside `<e-toolboxitemsettings>` to define custom templates. Bind the `type` property to a `FormWidgetType` value to target a specific widget type, and pass the custom UI using the `:template` prop.

Multiple `<e-toolboxitemsetting>` entries can be added to register templates for different widget types.

Once a field is dragged onto the design canvas, the custom template renders automatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

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

<script setup lang="ts">
import { ref } from 'vue';
import {
    FormBuilderComponent as EjsFormBuilder,
    ToolboxItemSettingsDirective as EToolboxitemsettings,
    ToolboxItemSettingDirective as EToolboxitemsetting
} from '@syncfusion/ej2-vue-form-builder';
import { FormWidgetType } from '@syncfusion/ej2-form-builder';

const formObj = ref<InstanceType<typeof EjsFormBuilder> | null>(null);
const formType = FormWidgetType.Textbox;
const schema = {
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

function setFieldValue(data: any, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    formObj.value?.setFieldValue(data.fieldData?.id || data.id, value);
}
</script>

{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}

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

{% endhighlight %}
{% endtabs %}

In the Preview tab, the templates are displayed so that you can validate the created form.

![Templates in Form Builder](./images/form-builder-template.gif)

## Adding properties of the template in property panel

The properties of third party components can be added to the property panel using the `setProperty` method in the Form Builder. For more details, see this [documentation](./property-panel#adding-a-new-property-in-the-property-panel)

## Exporting templates

When the form schema is exported, the template itself is not included in the schema. However, a `templateId` property is added to the form schema to notify Form Renderer that a template is mapped to the corresponding element. This value is configured via the `templateId` property on `<e-toolboxitemsetting>`.

In Form Renderer, additional configuration is required as described in the [documentation](http://ej2.syncfusion.com/vue/documentation/form-renderer/templates) to render templates in the form.