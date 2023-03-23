---
layout: post
title: Getting started vue3 with Vue Numerictextbox component | Syncfusion
description:  Checkout and learn about Getting started vue3 with Vue Numerictextbox component of Syncfusion Essential JS 2 and more details.
control: Getting started vue3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to use Syncfusion Vue NumericTextBox components in Vue 3 application.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Creating Vue application using Vue CLI

The easiest way to create a Vue application is to use the [`Vue CLI`](https://github.com/vuejs/vue-cli). Vue CLI versions above [`4.5.0`](https://v3.vuejs.org/guide/migration/introduction.html#vue-cli) are mandatory for creating applications using Vue 3. Use the following command to uninstall older versions of the Vue CLI.

```bash
npm uninstall vue-cli -g
```

Use the following commands to install the latest version of Vue CLI.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new project using the command below.

```bash
vue create quickstart
```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion NumericTextBox package in the application

 Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.
The NumericTextBox component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-inputs --save
```

## Adding CSS reference for Syncfusion Vue NumericTextBox component

Import the needed css styles for the NumericTextBox component along with dependency styles in the `<styles>` section of the `src/App.vue` file as follows.

```
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>
```

## Adding Syncfusion Vue NumericTextBox component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the NumericTextBox component using following steps.

Import the NumericTextBox component in the `<script>` section of the `src/App.vue` file.

```
<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
</script>
```

Register the NumericTextBox component.

 ```js
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
//Component registeration
export default {
    name: "App",
    components: {
        'ejs-numerictextbox' : NumericTextBoxComponent,
    }
}
```

Add the component definition in template section.

```
<template>
    <div class="control_wrapper">
        <ejs-numerictextbox value="10"></ejs-numerictextbox>
    </div>
</template>
```

Summarizing the above steps, update the `src/App.vue` file with following code.

```
<template>
    <div class="control_wrapper">
        <ejs-numerictextbox value="10"></ejs-numerictextbox>
    </div>
</template>
<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-numerictextbox": NumericTextBoxComponent
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
    .control_wrapper {
        margin: 35px auto;
        width: 240px;
    }
</style>
```

## Running the application

Run the application using the following command.

```bash
npm run serve
```

Output be like the below.

![NumericTextBox initial rendering with value](./images/value.png)

## Range validation

You can set the minimum and maximum range of values in the NumericTextBox using the [`min`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#min) and [`max`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#max) properties, so the numeric value should be in the min and max range.

The validation behavior depends on the [`strictMode`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#strictmode) property.

    ```
    <template>
    <div id="app">
        <div class='wrap'>
            <ejs-numerictextbox id="numeric" ref="numeric_instance" :value="value" :step="step" :min="min" :max="max"></ejs-numerictextbox>
        </div>
    </div>
    </template>
    <script>
    import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
    //Component registeration
    export default {
        name: 'App',
        components: {
            "ejs-numerictextbox": NumericTextBoxComponent
        },
        data () {
            return {
                min: 1,
                max: 100,
                value: 30,
                step: 2
            }
        }
    }
    </script>
    <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
        .wrap {
            margin: 0 auto;
            width: 240px;
        }
    </style>
    ```

Output be like the below.

![NumericTextBox with range of value](./images/range.png)

## Formatting the value

User can set the format of the NumericTextBox component using [`format`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#format)
property. The value will be displayed in the specified format, when the component is in focused out state. For more information about formatting the value, refer to this [link](./formats/).

The below example demonstrates format the value by using currency format value `c2`.

    ```
    <template>
    <div id="app">
        <div class='wrap'>
            <ejs-numerictextbox id="numeric" ref="numeric_instance" :format="format" :value="value"></ejs-numerictextbox>
        </div>
    </div>
    </template>
    <script>
    import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
    //Component registeration
    export default {
        name: 'App',
        components: {
            "ejs-numerictextbox": NumericTextBoxComponent
        },
        data () {
            return {
                format: 'c2',
                // sets value to the NumericTextBox
                value: 10
            }
        }
    }
    </script>
    <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
        .wrap {
            margin: 0 auto;
            width: 240px;
        }
    </style>
    ```

Output be like the below.

![NumericTextBox with Format](./images/format.png)

## Precision of numbers

You can restrict the number of decimals to be entered in the NumericTextBox by using the [`decimals`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#decimals) and [`validateDecimalOnType`](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox#validatedecimalontype) properties.
So, you can't enter the number whose precision is greater than the mentioned decimals.

*If `validateDecimalOnType` is false, number of decimals will not be restricted. Else, number of decimals will be restricted while typing in the NumericTextBox.

    ```
    <template>
    <div id="app">
        <div class='wrap'>
            <ejs-numerictextbox id="strict" :validateDecimalOnType='true' placeholder="ValidateDecimalOnType enabled" floatLabelType="Auto" format='n3' :value="value" :decimals="decimals"></ejs-numerictextbox>
        </div>
        <div class='wrap'>
            <ejs-numerictextbox id="allow" placeholder="ValidateDecimalOnType disabled" floatLabelType="Auto" format='n3' :value="value" :decimals="decimals"></ejs-numerictextbox>
        </div>
    </div>
    </template>
    <script>
    import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
    //Component registeration
    export default {
        name: 'App',
        components: {
            "ejs-numerictextbox": NumericTextBoxComponent
        },
        data () {
            return {
                // sets number of decimal places to be allowed by the NumericTextBox
                decimals: 3,
                value: 10,
            }
        }
    }
    </script>
    <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
        .wrap {
            margin: 35px auto;
            width: 240px;
        }
    </style>
    ```

Output be like the below.

![NumericTextBox with precision of numbers](./images/precision.png)

## Model binding

In NumericTextBox, the `value` property supports model binding functionality. The below example demonstrates model binding functionality with the NumericTextBox and HTML input element.

    ```
    <template>
    <div id="app">
        <div class='wrap'>
            <div class='e-input-group' style='margin-bottom:30px'>
                <input class='e-input' type='text' v-model='value' placeholder='Enter a number'  />
            </div>
            <ejs-numerictextbox v-model="value" :value="value"></ejs-numerictextbox>
        </div>
    </div>
    </template>
    <script>
    import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
    //Component registeration
    export default {
        name: 'App',
        components: {
            "ejs-numerictextbox": NumericTextBoxComponent
        },
        data () {
            return {
                value : 10
            }
        }
    }
    </script>
    <style>
        @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
        @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
        .wrap {
            margin: 35px auto;
            width: 240px;
        }
    </style>
    ```

Output be like the below.

![NumericTextBox with model binding](./images/model.png)

## See Also

* [How to perform custom validation using FormValidator](./how-to/perform-custom-validation-using-form-validator/)
* [How to customize the UI appearance of the control](./how-to/customize-the-ui-appearance-of-the-control/)
* [How to customize the spin button’s up and down arrow](./how-to/customize-the-spin-buttons-up-and-down-arrow/)
* [How to customize the step value and hide spin buttons](./how-to/customize-the-step-value-and-hide-spin-buttons/)
* [How to prevent nullable input in NumericTextBox](./how-to/prevent-nullable-input-in-numerictextbox/)
* [How to maintain trailing zeros in NumericTextBox](./how-to/maintain-trailing-zeros-in-numerictextbox/)
