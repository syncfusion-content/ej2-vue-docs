---
layout: post
title: Exporting and Importing in Vue Form Builder control | Syncfusion
description: Learn how to export and import in the Vue Form Builder control. Use export to reuse the generated form schema in Form Renderer, and import to continue editing an existing schema in Form Builder.
platform: ej2-vue
control: Exporting and Importing
documentation: ug
domainurl: ##DomainURL##
---

# Exporting and Importing in Vue Form Builder component

The Vue Form Builder supports exporting the generated form schema for reuse in the Form Renderer control and importing an existing schema back into the builder for further editing.

## Export form schema

You can export the generated form schema by clicking the **Export** button in the toolbar at the top of the Form Builder control. The exported schema includes the form structure, field configuration, and other properties required to recreate the form.

You can use the exported schema in the Form Renderer control to render the same form at runtime.

## Disabling the export

Exporting can be disabled in the Form Builder component by setting the [allowExport](https://ej2.syncfusion.com/vue/documentation/api/form-builder/index-default#allowexport) property to `false`. The default value of the property is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/form-builder/export-import-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/form-builder/export-import-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

The output will appear as follows:

{% previewsample "page.domainurl/code-snippet/form-builder/export-import-cs1" %}

## Import form schema

To import a form, assign the exported schema to the [schema](https://ej2.syncfusion.com/vue/documentation/api/form-builder/index-default#schema) property of the Form Builder. This loads the form definition into the builder so that you can continue editing it.

The following example shows how to import a schema object to the Form Builder.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/form-builder/export-import-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/form-builder/export-import-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/form-builder/export-import-cs2" %}