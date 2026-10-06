---
layout: post
title: Templates in Vue Form Renderer component | Syncfusion
description: Learn how to use templates in the Vue Form Renderer component to display and integrate third-party components within forms.
platform: ej2-vue
control: Templates
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## Form Renderer component

Templates allow you to render custom UI or third-party components inside the Form Renderer in place of built-in widgets.

This section explains how to use templates in the Form Renderer component.

## Adding Templates

Templates can be added to a form in Form Renderer using `<e-customwidgetsetting>`.
Use the `<e-customwidgetsetting>` directive inside `<e-customwidgetsettings>` to define custom templates. Set the `type` property to target all form fields matching a specific schema type (e.g., `"string"`, `"boolean"`), and pass the template using the `:template` prop.

Multiple `<e-customwidgetsetting>` entries can be added inside `<e-customwidgetsettings>` to register templates for different field types.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div>
        <div class="col-lg-12 control-section">
            <div id="form-control control-wrapper" :style="{ paddingLeft: '100px', paddingRight: '100px' }">
                <ejs-formrenderer id="form-renderer-control" ref="formRenderer" :schema="schema" @submit="onSubmit">
                    <e-customwidgetsettings>
                        <e-customwidgetsetting :type="'textbox'" :template="'textboxTemplate'" />
                    </e-customwidgetsettings>
                    <template v-slot:textboxTemplate="{ data }">
                        <input :id="`form-renderer-control-${data.fieldData.id}`" class="e-input"
                            :type="data.fieldData?.textboxType || data.textboxType || 'text'"
                            :name="data.fieldData?.name || data.name" :placeholder="data.fieldData?.placeholder"
                            :value="data.value || ''" @input="setFieldValue(data, $event)" />
                    </template>
                </ejs-formrenderer>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    FormRendererComponent as EjsFormrenderer,
    CustomWidgetSettingsDirective as ECustomwidgetsettings,
    CustomWidgetSettingDirective as ECustomwidgetsetting
} from '@syncfusion/ej2-vue-form-renderer';

const formRenderer = ref<InstanceType<typeof EjsFormrenderer> | null>(null);
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
};

function setFieldValue(data: any, event: Event, isCheckbox = false) {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const value = isCheckbox && target instanceof HTMLInputElement ? target.checked : target.value;
    formRenderer.value?.setFieldValue(data.fieldData.id, value);
}
function onSubmit(args: { data?: Record<string, unknown>; isValid?: boolean }) {
    if (args.data) {
        console.log(args.data, args.isValid);
    }
}
</script>

{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <div>
        <div class="col-lg-12 control-section">
            <div id="form-control control-wrapper" :style="{ paddingLeft: '100px', paddingRight: '100px' }">
                <ejs-formrenderer id="form-renderer-control" ref="formRenderer" :schema="schema" @submit="onSubmit">
                    <e-customwidgetsettings>
                        <e-customwidgetsetting :type="'textbox'" :template="'textboxTemplate'" />
                    </e-customwidgetsettings>

                    <template v-slot:textboxTemplate="{ data }">
                        <input :id="`form-renderer-control-${data.fieldData.id}`" class="e-input"
                            :type="data.fieldData?.textboxType || data.textboxType || 'text'"
                            :name="data.fieldData?.name || data.name" :placeholder="data.fieldData?.placeholder"
                            :value="data.value || ''" @input="setFieldValue(data, $event)" />
                    </template>
                </ejs-formrenderer>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    FormRendererComponent as EjsFormrenderer,
    CustomWidgetSettingsDirective as ECustomwidgetsettings,
    CustomWidgetSettingDirective as ECustomwidgetsetting
} from '@syncfusion/ej2-vue-form-renderer';

export default {
    components: {
        EjsFormrenderer,
        ECustomwidgetsettings,
        ECustomwidgetsetting
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
        setFieldValue(data: any, event: Event, isCheckbox = false) {
            const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
            const value = isCheckbox && target instanceof HTMLInputElement ? target.checked : target.value;
            const formRenderer = this.$refs.formRenderer as InstanceType<typeof EjsFormrenderer> | undefined;
            formRenderer?.setFieldValue(data.fieldData.id, value);
        },
        onSubmit(args: { data?: Record<string, unknown>; isValid?: boolean }) {
            if (args.data) {
                console.log(args.data, args.isValid);
            }
        }
    }
};
</script>

{% endhighlight %}
{% endtabs %}

## Adding a template to a single or specific field

To apply a template to a specific field rather than all fields of a given type, use `fieldName` or `templateId` on `<e-customwidgetsetting>`:

* **`fieldName`** — Matches the `name` value of the target field in the schema.
* **`templateId`** — Matches a `templateId` property defined on the field in the schema.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div>
        <div id="form-control control-wrapper" :style="{ paddingLeft: '100px', paddingRight: '100px' }">
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
        </div>
    </div>
</template>

<script setup lang="ts">/
import { ref } from 'vue';
import {
    FormRendererComponent as EjsFormrenderer,
    CustomWidgetSettingsDirective as ECustomwidgetsettings,
    CustomWidgetSettingDirective as ECustomwidgetsetting
} from '@syncfusion/ej2-vue-form-renderer';
const formRenderer = ref<InstanceType<typeof EjsFormrenderer> | null>(null);
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
};

function setFieldValue(data: any, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    formRenderer.value?.setFieldValue(data.fieldData.id, value);
}

function onSubmit(args: { data?: Record<string, unknown>; isValid?: boolean }) {
    if (args.data) {
        console.log(args.data, args.isValid);
    }
}
</script>

{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <div>
        <div id="form-control control-wrapper" :style="{ paddingLeft: '100px', paddingRight: '100px' }">
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
        </div>
    </div>
</template>

<script lang="ts">
import {
    FormRendererComponent as EjsFormrenderer,
    CustomWidgetSettingsDirective as ECustomwidgetsettings,
    CustomWidgetSettingDirective as ECustomwidgetsetting
} from '@syncfusion/ej2-vue-form-renderer';

export default {
    components: {
        EjsFormrenderer,
        ECustomwidgetsettings,
        ECustomwidgetsetting
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
        setFieldValue(data: any, event: Event) {
            const value = (event.target as HTMLInputElement).value;
            const formRenderer = this.$refs.formRenderer as InstanceType<typeof EjsFormrenderer> | undefined;
            formRenderer?.setFieldValue(data.fieldData.id, value);
        },
        onSubmit(args: { data?: Record<string, unknown>; isValid?: boolean }) {
            if (args.data) {
                console.log(args.data, args.isValid);
            }
        }
    }
};
</script>

{% endhighlight %}
{% endtabs %}
