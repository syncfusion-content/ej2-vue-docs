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

Query Builder allows you to lock rules as well as groups. When a rule is locked, the field, operator, and value will be disabled. When a group is locked, all the elements within the group will be disabled. You can use [`showButtons`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#showbuttons) to enable/disable these buttons.

You can lock groups and rules by interacting through the user interface and methods.

* Use the [`lockGroup`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#lockGroup) method to lock group.
* Use [`lockRule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#lockRule) method to lock rule.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/lock-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/lock-cs1" %}