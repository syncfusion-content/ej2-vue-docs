---
layout: post
title: Filtering in Vue Query Builder UI | Syncfusion
description: Add or remove rules and groups in the Vue Query Builder UI using addRules, deleteRules, addGroups, and deleteGroups methods programmatically.
control: Filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue Query Builder UI

Query Builder allows you to create or delete conditions and groups. You can use [`showButtons`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#showbuttons) to enable/disable these buttons.

You can create or delete conditions by interacting through the user interface and methods.

* Use the [`addRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#addrules), and [`deleteRules`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#deleterules) methods to create/delete conditions.
* Use [`addGroups`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#addgroups), and [`deleteGroups`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#deletegroups) methods to create/delete groups.

Install Syncfusion<sup style="font-size:70%">&reg;</sup> `Buttons` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/default-cs9" %}