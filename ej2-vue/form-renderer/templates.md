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

Templates can be added to a form in Form Renderer using [customwidgetsettings](https://ej2.syncfusion.com/vue/documentation/api/form-renderer/index-default#customwidgetsettings).
Use the `<e-customwidgetsetting>` directive inside `<e-customwidgetsettings>` to define custom templates. Set the [type](https://ej2.syncfusion.com/vue/documentation/api/form-renderer/customwidgetsetting#type) property to target all form fields matching a specific schema type (e.g., `"string"`, `"boolean"`), and pass the template using the [template](https://ej2.syncfusion.com/vue/documentation/api/form-renderer/customwidgetsetting#template) prop.

Multiple `<e-customwidgetsetting>` entries can be added inside `<e-customwidgetsettings>` to register templates for different field types.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/form-renderer/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/form-renderer/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/form-renderer/template-cs1" %}

## Adding a template to a single or specific field

To apply a template to a specific field rather than all fields of a given type, use [fieldName](https://ej2.syncfusion.com/vue/documentation/api/form-renderer/customwidgetsetting#fieldname) or [templateId](https://ej2.syncfusion.com/vue/documentation/api/form-renderer/customwidgetsetting#templateid) on `<e-customwidgetsetting>`:

* **`fieldName`** — Matches the `name` value of the target field in the schema.
* **`templateId`** — Matches a `templateId` property defined on the field in the schema.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/form-renderer/template-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/form-renderer/template-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/form-renderer/template-cs2" %}
