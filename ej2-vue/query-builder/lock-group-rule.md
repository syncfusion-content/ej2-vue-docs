---
layout: post
title:  Lock Group/Rule in Vue Query builder component | Syncfusion
description: Learn here all about Lock Group/Rule in Syncfusion Vue Query builder component of Syncfusion Essential JS 2 and more.
control: Lock Group/Rule
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Lock Group/Rule in Vue Query builder component

The Query Builder provides the functionality to lock individual rules or entire groups. When a rule is locked, it prevents users from modifying its field, operator, and value, effectively disabling these components. Similarly, locking a group disables all elements contained within it. This feature offers users greater control over their query configurations, ensuring that specific rules or groups remain unchanged. Additionally, users can manage the visibility of locking buttons through the [`showButtons`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#showbuttons) function, allowing for seamless control over the locking mechanism.

You can lock groups and rules by interacting through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#lockgroup) method to lock group.
* Use [`lockRule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#lockrule) method to lock rule.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/lock-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/lock-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/lock-cs1" %}