---
layout: post
title: Adding custom item to context menu in Vue File manager component | Syncfusion
description: Learn here all about Adding custom item to context menu in Syncfusion Vue File manager component of Syncfusion Essential JS 2 and more.
control: Adding custom item to context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to context menu in Vue File manager component

The context menu can be customized using the [contextMenuSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#contextmenusettings), [menuOpen](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#menuopen), and [menuClick](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#menuclick) events.

The following example shows adding a custom item in the context menu.

The [contextMenuSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#contextmenusettings) is used to add new menu item. The [menuOpen](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#menuopen) event is used to add the icon to the new menu item. The [menuClick](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#menuclick) event is used to add an event handler to the new menu item.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/contextmenu-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/contextmenu-cs2" %}
