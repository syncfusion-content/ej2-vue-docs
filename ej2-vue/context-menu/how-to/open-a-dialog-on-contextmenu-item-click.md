---
layout: post
title: Open a dialog on contextmenu item click in Vue Context menu component | Syncfusion
description: Learn here all about Open a dialog on contextmenu item click in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Open a dialog on contextmenu item click 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open a dialog on contextmenu item click in Vue Context menu component

This section explains about how to open a dialog on ContextMenu item click. This can be achieved by handling dialog open in [`select`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/#select) event of the ContextMenu.

Install Syncfusion `Popups` packages using below command.

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