---
layout: post
title: Template editing in Vue Grid component | Syncfusion
description: Learn here all about Template editing in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Template editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in Vue Grid component

## Inline or dialog template editing

The dialog/inline template editing provides an option to customize the default behavior of dialog editing. Using the dialog template, you can render your own editors by defining the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) as **Dialog/Normal** and [`editSetting.template`](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#template) as Vue component.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

To get start quickly with Dialog/Inline template edit Option, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=Mrrgrb8nRlE" %}

In the following sample, grid enabled with dialog template editing.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/dialogtemplate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/dialogtemplate-cs1" %}

> The Dialog/Inline template form editors should have **name** attribute.

## Template context

The template should be a Vue Component. You can access the row information inside the Component and you can bind the attribute or value based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>isAdd</kbd> |  A Boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the **OrderID** textbox has been disabled by using the **isAdd** property.

```
// The disabled attributes will be added based on the isAdd property.
<input id="OrderID" name="OrderID" v-model='data.OrderID' type="text" :disabled="!data.isAdd">

```

## Get value from editor

You can read, format, and update the current editor value in the  [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event at the time of setting **requestType** to **save**.

In the following code example, the **Freight** value has been formatted and updated.

```ts
 actionBegin(args) {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['Freight'] = parseFloat(args.form.querySelector("#Freight").value);
        }
    },

```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog.If the first input element is in disabled or hidden state, focus the valid input element in the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event based on **requestType** as **beginEdit**.

```ts

actionComplete(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID')).focus();
            }
        }
    }

```

## Adding validation rules for custom editors

If you have used additional fields that are not present in the column model, then add the validation rules to the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event.

```ts

actionComplete(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

```