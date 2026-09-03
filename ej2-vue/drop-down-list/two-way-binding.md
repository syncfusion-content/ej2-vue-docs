---
layout: post
title: Two Way Binding in Vue Dropdown List | Syncfusion
description: Bind a Syncfusion Vue Dropdown List value two ways with the v-model directive so changes automatically sync to other components in Vue.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two Way Binding in Vue Dropdown List

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one DropDownList component, the v-model directive automatically updates the value in the other DropDownList.

The following example demonstrates how to achieve two-way binding in the DropDownList.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/two-way-cs1" %}