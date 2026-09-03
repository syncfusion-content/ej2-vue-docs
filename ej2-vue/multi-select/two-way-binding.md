---
layout: post
title: Two Way Binding in Vue MultiSelect Dropdown | Syncfusion
description: Bind a Syncfusion Vue MultiSelect Dropdown value two ways with the v-model directive so changes automatically sync to other components in Vue.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two Way Binding in Vue MultiSelect Dropdown

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one MultiSelect component, v-model will automatically update the value in the other MultiSelect.

The following example demonstrates how to set the two-way binding in the MultiSelect.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/two-way-cs1" %}