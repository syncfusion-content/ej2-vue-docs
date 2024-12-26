---
layout: post
title: Tooltip for multiple targets in Vue Tooltip component | Syncfusion
description: Learn here all about Create and show tooltip on multiple targets in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Create and show tooltip on multiple targets 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create and show tooltip on multiple targets in Vue Tooltip component

Tooltip can be created and shown on multiple targets within a container by defining the specific target elements to the [`target`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#target) property. So, the tooltip is initialized only on matched targets within a container.

In this case, the tooltip content is derived from the **title** attribute of the **target** element.

```ts

<ejs-tooltip target='.e-info' position='RightCenter'>
</ejs-tooltip>

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/target-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/target-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/target-cs2" %}