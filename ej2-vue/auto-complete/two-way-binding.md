---
layout: post
title: Two Way Binding in Vue AutoComplete | Syncfusion
description: Bind a Syncfusion Vue AutoComplete value two ways with the v-model directive so changes automatically sync to other components in Vue.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two Way Binding in Vue AutoComplete

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one AutoComplete component, v-model will automatically update the value in the other AutoComplete.

The following example demonstrates how to set the `two-way-binding` in the AutoComplete.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/two-way-cs1" %}