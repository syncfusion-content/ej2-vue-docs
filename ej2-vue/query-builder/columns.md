---
layout: post
title: Columns in Vue Query Builder UI | Syncfusion
description: Define column schemas in the Vue Query Builder UI with field, label, operators, format, step, and validation for accurate filter rendering.
control: Columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Vue Query Builder UI

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#datasource) schema in the Query Builder. This plays a vital role in rendering column values. The query builder operations such as create or delete conditions and create or delete group they are performed based on the column definitions. The [`field`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#field) property of the columns is necessary to map the data source values in the query builder columns.

> If the column field is not specified in the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#datasource), the column values will be empty.

## Auto generation

The [`columns`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#columns) are automatically generated when the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#columns) declaration is empty or undefined while initializing the query builder. All the columns in the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#datasource) are bound as the query builder columns.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs1" %}

> When columns are auto-generated, the column type will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#datasource).

## Labels

By default, the column label is displayed from the column [`field`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#field) value. To override the default label, you have to define the [`label`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#label) value.

## Operators

The operator for a column can be defined in the [`operators`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#operators) property.

The available operators and its supported data types are:

| Operators | Description | Supported Types |
| ------------ | ----------------------- | ------------------ |
| startswith  | Checks whether the value begins with the specified value. | String |
| endswith  | Checks whether the value ends with the specified value. | String |
| contains | Checks whether the value contains the specified value. | String |
| equal | Checks whether the value is equal to the specified value. | String Number Date Boolean |
| notequal | Checks whether the value is not equal to the specified value. | String Number Date Boolean |
| greaterthan | Checks whether the value is greater than the specified value. | Date Number |
| greaterthanorequal | Checks whether a value is greater than or equal to the specified value. | Date Number |
| lessthan | Checks whether the value is less than the specified value.| Date Number |
| lessthanorequal | Checks whether the value is less than or equal to the specified value. | Date Number |
| between | Checks whether the value is between the two-specific value. | Date  Number |
| notbetween | Checks whether the value is not between the two-specific value. | Date  Number |
| in | Checks whether the value is one of the specific values. | String  Number |
| notin | Checks whether the value is not in the specific values. | String  Number |

## Step

The Query Builder allows you to set the step values to the number fields. So that you can easily access the numeric textbox. Use the [`step`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#step) property, to set the step value for number values.

## Format

The Query Builder formats date and number values. Use the [`format`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#format) property to format date and number values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs2" %}

## Validations

Validation allows you to validate the conditions and it display errors for invalid fields while using  the [`validateFields`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#validatefields) method.  To enable validation in the query builder , set the allowValidation to true. Column fields are validated after setting [`allowValidation`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#allowvalidation) as to true. So, you should manually configure the validation for Operator and, Value fields through [`validation`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/columnsmodel#validation).

Install Syncfusion<sup style="font-size:70%">&reg;</sup> `Buttons` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs3" %}

> Set [`isRequired`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/validation#isrequired) validation for `Operator` and `Value` fields.
> Set [`max`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/validation#max), [`min`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/validation#min) values for number values.