---
layout: post
title: How to change menu items dynamically in Vue Context Menu | Syncfusion
description: Show or hide Vue Context Menu items at runtime using the hideItems and showItems methods within the beforeOpen event based on the target element.
control: Change menu items dynamically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to change menu items dynamically in Vue Context Menu

The items visible in the ContextMenu can be changed dynamically based on the target in which you open the ContextMenu. To achieve this behavior, initialize the ContextMenu with all items using the [items](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#items) property and then, based on the context you open, hide/show the required items using the [hideItems](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#hideitems)/ [showItems](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#showitems) methods in the [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#beforeopen) event.

In the following example, the datasource for the Clipboard div is `Cut`, `Copy`, `Paste` and for the Editor div is `Add`, `Edit`, `Delete`, which is changed on the [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#beforeopen) event using the [hideItems](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#hideitems) and [showItems](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#showitems) methods.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs5" %}