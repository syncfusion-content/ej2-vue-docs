---
layout: post
title: Open a dialog on ContextMenu item click in Vue | Syncfusion
description: Open a Dialog component when a Vue Context Menu item is clicked by handling the dialog open call in the select event of the Context Menu control.
control: Open a dialog on contextmenu item click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to open a dialog on ContextMenu item click in Vue Context Menu

This section explains how to open a dialog on ContextMenu item click. This can be achieved by handling the dialog open in the [select](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#select) event of the ContextMenu.

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> `Popups` packages using the below command.

```bash
npm install @syncfusion/ej2-vue-popups --save
```

In the following sample, Dialog will open while clicking `Save As...` item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs6" %}