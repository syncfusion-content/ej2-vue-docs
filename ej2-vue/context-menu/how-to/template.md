---
layout: post
title: Template in Vue Context menu component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Context menu component

## Show table in sub ContextMenu

Menu items of the ContextMenu can be customized according to the requirement. The section explains about how to customize table template
in sub menu item.

This can be achieved by appending table layout while `li` rendering by using [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/#beforeitemrender) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs8" %}

## Show UI components in ContextMenu

UI components can also be placed inside the each `li` element of ContextMenu.

In the following example, CheckBox component is placed inside each `li` element and this can be achieved by creating CheckBox component in [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/#beforeitemrender) event and appending it into the `li` element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs9" %}
