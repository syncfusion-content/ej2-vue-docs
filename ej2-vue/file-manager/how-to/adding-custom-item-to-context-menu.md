---
layout: post
title: Custom context menu item in Vue File Manager component | Syncfusion
description: Learn here all about Adding custom item to context menu in Syncfusion Vue File Manager component of Syncfusion Essential JS 2 and more.
control: File Manager
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to context menu in Vue File Manager component

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