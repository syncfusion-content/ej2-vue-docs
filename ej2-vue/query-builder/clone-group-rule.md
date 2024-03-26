---
layout: post
title: Clone Group/Rule in Vue Query builder component | Syncfusion
description: Learn here all about Clone Group/Rule in Syncfusion Vue Query builder component of Syncfusion Essential JS 2 and more.
control: Clone Group/Rule 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Clone Group/Rule in Vue Query builder component

The Query Builder functionality extends to cloning both individual rules and entire groups. Utilizing the Clone options will generate an exact duplicate of a rule or group adjacent to the original one. This feature enables users to replicate complex query structures effortlessly. The [`showButtons`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#showbuttons) function offers users the ability to toggle the visibility of these cloning buttons, providing convenient control over the cloning process within the Query Builder interface.

You can clone groups and rules by interacting through the user interface and methods.

* Use the [`cloneGroup`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#cloneGroup) method to clone group.
* Use [`cloneRule`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#cloneRule) method to clone rule.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/query-builder/clone-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/clone-cs1" %}