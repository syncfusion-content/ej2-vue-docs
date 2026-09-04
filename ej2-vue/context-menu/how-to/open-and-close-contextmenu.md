---
layout: post
title: How to open and close ContextMenu in Vue Context Menu | Syncfusion
description: Open and close the Vue Context Menu programmatically at a specified position using the open and close public methods of the component.
control: Open and close contextmenu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to open and close ContextMenu in Vue Context Menu

ContextMenu can be opened and closed programmatically whenever required by using the [open](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#open) and [close](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#close) methods.

Install the Syncfusion<sup style="font-size:70%">&reg;</sup> `Buttons` packages using the below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

In the following example, the ContextMenu is opened using the `open` method at the specified position using `top` and `left`. Also, the ContextMenu is closed using the `close` method on ContextMenu item click or document click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs7" %}