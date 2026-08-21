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

## Integrate menu component

You can integrate menu component as toolbar item in Toolbar using Vue **template**. Menu can be populated with items as needed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/menu-component-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/menu-component-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/menu-component-cs1" %}