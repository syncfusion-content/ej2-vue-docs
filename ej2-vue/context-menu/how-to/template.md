---
layout: post
title: How to render template in Vue Context Menu | Syncfusion
description: Customize Vue Context Menu items by rendering a table layout or embedding UI components like CheckBox inside each li via the beforeItemRender event.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render template in Vue Context Menu

## Show table in sub ContextMenu

Menu items of the ContextMenu can be customized according to the requirement. This section explains how to customize the table template in a sub menu item.

This can be achieved by appending the table layout while `li` rendering by using the [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#beforeitemrender) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs8" %}

## Show UI components in ContextMenu

UI components can also be placed inside each `li` element of the ContextMenu.

In the following example, a CheckBox component is placed inside each `li` element and this can be achieved by creating the CheckBox component in the [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#beforeitemrender) event and appending it into the `li` element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs9" %}