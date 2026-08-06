---
layout: post
title: Adding custom item to context menu in Vue File Manager | Syncfusion
description: Learn how to add a custom item to the context menu in the Vue File Manager with custom icons and click handlers.
control: File Manager
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom item to context menu in Vue File Manager

The context menu can be customized using the [contextMenuSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#contextmenusettings), [menuOpen](https://ej2.syncfusion.com/vue/documentation/api/file-manager#menuopen), and [menuClick](https://ej2.syncfusion.com/vue/documentation/api/file-manager#menuclick) events.

The following example demonstrates how to add a custom item to the context menu.

The [contextMenuSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager#contextmenusettings) property is used to add a new menu item. The [menuOpen](https://ej2.syncfusion.com/vue/documentation/api/file-manager#menuopen) event is used to add an icon to the new menu item. The [menuClick](https://ej2.syncfusion.com/vue/documentation/api/file-manager#menuclick) event is used to attach an event handler to the new menu item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/file-manager/contextmenu-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/file-manager/contextmenu-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/contextmenu-cs2" %}