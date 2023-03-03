---
layout: post
title: Open and close contextmenu in Vue Context menu component | Syncfusion
description: Learn here all about Open and close contextmenu in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Open and close contextmenu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open and close contextmenu in Vue Context menu component

ContextMenu can be opened and closed programmatically whenever required by using the open and close methods.

Install Syncfusion `Button` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

In the following example, the ContextMenu is opened using the [`open`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#open) method at the specified position using `top` and `left`. Also, ContextMenu is closed using [`close`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#close) method on ContextMenu item click or document click.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs7" %}
