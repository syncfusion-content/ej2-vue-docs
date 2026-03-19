---
layout: post
title: Template customization in Vue Inline AI Assist component | Syncfusion
description: Checkout and learn about templates with Vue Inline AI Assist component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Template customization in Vue Inline AI Assist component

The Inline AI Assist provides the template options to customize the response and footer items.

## Editor template

You can use the [editorTemplate](../api/inline-ai-assist#editortemplate) property to customize the default footer area and manage prompt request actions in the Inline AI Assist. This allows users to create unique footers that meet their specific needs.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/app.vue %}
{% endhighlight %}
{% endtabs %}

## Response template

You can use the [responseTemplate](../api/inline-ai-assist#responsetemplate) property to customize response items within the Inline AI Assist. The template context includes the `response` and `toolbarItems` values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/templates/response-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/inline-ai-assist/templates/response-template/app.vue %}
{% endhighlight %}
{% endtabs %}