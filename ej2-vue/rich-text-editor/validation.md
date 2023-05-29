---
layout: post
title: Validation in Vue Rich text editor component | Syncfusion
description: Learn here all about Validation in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Vue Rich text editor component

## Validation rules

The Rich Text Editor provides the functionality of character count and its validation. So, you can validate the Rich Text Editor’s value on form submission by applying validationRules and validationMessage to the Rich Text Editor.

| Rules | Description |
|----------------|---------|
| required | Requires value for the Rich Text Editor control.|
| minlength | Requires the value to be of given minimum characters count.|
| maxlength | Requires the value to be of given maximum characters count.|

This sample is used to validate form using the obtrusive Validation. Type the values in Rich Text Editor and the form enables the validation with the formvalidator rules by clicking on the submit externally. All rules are validated by the formvalidator rules.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/markdown-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs12" %}

## Validation message

The default error message for a rule can be customizable by defining it along with the concern rule object as follows.

In the following sample, customize the error message along with the concern rule.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/markdown-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs13" %}
