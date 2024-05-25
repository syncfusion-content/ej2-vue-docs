---
layout: post
title: Change menu items dynamically in Vue Context menu component | Syncfusion
description: Learn here all about Change menu items dynamically in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Change menu items dynamically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change menu items dynamically in Vue Context menu component

The items visible in the ContextMenu can be changed dynamically based on the target in which you open the ContextMenu. To achieve this behavior, initialize ContextMenu with all items using [`items`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#items) property and then based on the context you open hide/show required items using [`hideItems`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#hideitems)/ [`showItems`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#showitems) method in [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#beforeopen) event.

In the following example, the datasource for Clipboard div is `Cut`, `Copy`, `Paste` and for the Editor div is `Add`, `Edit`, `Delete` is changed on [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#beforeopen) event using [`hideItems`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#hideitems) and [`showItems`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#showitems) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs5" %}