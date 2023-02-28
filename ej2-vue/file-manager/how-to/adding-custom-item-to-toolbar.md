---
layout: post
title: Adding custom item to toolbar in Vue File manager component | Syncfusion
description: Learn here all about Adding custom item to toolbar in Syncfusion Vue File manager component of Syncfusion Essential JS 2 and more.
control: Adding custom item to toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to toolbar in Vue File manager component

The toolbar items can be customized using the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#toolbarsettings) API and [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#toolbarclick) events.

The following example shows adding a custom item in the toolbar.

The new toolbar button is added using [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#toolbarsettings). The [toolbarClick](https://ej2.syncfusion.com/vue/documentation/api/file-manager/#toolbarclick) event is used to add an event handler to the new toolbar button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/file-manager/toolbar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/toolbar-cs2" %}
