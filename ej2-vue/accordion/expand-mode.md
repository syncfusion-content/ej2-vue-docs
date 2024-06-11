---
layout: post
title: Expand mode in Vue Accordion component | Syncfusion
description: Learn here all about Expand mode in Syncfusion Vue Accordion component of Syncfusion Essential JS 2 and more.
control: Expand mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Expand mode in Vue Accordion component

 The Accordion supports the two listed types of expand modes while expanding or collapsing the item.

* Single
* Multiple

## Single

The property enables to expand only one Accordion item at a time. If you expand any new item, the previously expanded one is collapsed and
new item changed to expanded state.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/expandmode/single-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/expandmode/single-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/expandmode/single-cs1" %}

## Multiple

Default expand mode of the Accordion is `Multiple`. It enables you to expand more than one Accordion item at a time. Expand/collapse action
can also be toggled by clicking on it again. For example, expanded item is collapsed when you click on it again.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/expandmode/multiple-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/expandmode/multiple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/expandmode/multiple-cs1" %}

## See Also

* [How to keep single pane open always](./how-to/to-keep-single-pane-open-always/)