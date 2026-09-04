---
layout: post
title: Template Configuration in Vue Toolbar | Syncfusion
description: Define custom Vue Toolbar item templates using the v-slot directive to render HTML, icons, or other components inside individual toolbar items.
control: Template configuration 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template Configuration in Vue Toolbar

## Integrate Menu component

You can integrate the Menu component as a toolbar item in the Toolbar using Vue **template**. The Menu component is imported from `@syncfusion/ej2-vue-navigations` and bound to a Toolbar item through its `template` property. Menu can be populated with items as needed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/menu-component-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/menu-component-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/menu-component-cs1" %}