---
layout: post
title: Validation in Vue Treegrid component | Syncfusion
description: Learn here all about Validation in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Vue Treegrid component

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data.
TreeGrid uses `Form Validator` component for column validation.
You can set validation rules by defining the [`columns.validationRules`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#validationrules).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/editing/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs14" %}

## Custom validation

You can define your own custom validation rules for the specific columns by using `Form Validator custom rules`.

In the below demo, custom validation applied for `Priority` column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/editing/default-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs15" %}