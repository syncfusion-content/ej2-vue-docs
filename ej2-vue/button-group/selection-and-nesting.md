---
layout: post
title: Selection and nesting in Vue Button group component | Syncfusion
description: Learn here all about Selection and nesting in Syncfusion Vue Button group component of Syncfusion Essential JS 2 and more.
control: Selection and nesting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection and nesting in Vue Button group component

## Selection

### Single selection

ButtonGroup supports radio type selection in which only one button can be selected. This can be achieved by adding input element along with `id` attribute with its corresponding label along with `for` attribute inside the target element. In this ButtonGroup, the type of the input element should be `radio` and `e-btn` is added to the `label` element.

The following example illustrates the single selection behavior in ButtonGroup,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs12" %}

### Multiple selection

ButtonGroup supports checkbox type selection in which multiple button can be selected. This can be achieved by adding input element with its corresponding label. In this ButtonGroup, the type of the input element should be `checkbox` and `e-btn` is added to the `label` element.

The following example illustrates the multiple selection behavior in ButtonGroup,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs13" %}

## Nesting

Nesting with other components can be possible in ButtonGroup. The following components can be nested in ButtonGroup.
* DropDownButton
* SplitButton

For nesting support, [`SplitButton dependencies`](./../split-button/getting-started#dependencies) should be configured and it should be added in
`system.config.js`.

### DropDownButton

To initialize DropDownButton component refer [`DropDownButton Getting Started documentation`](./../drop-down-button/getting-started).

In the following example, DropDownButton component is added by importing `DropDownButtonPlugin` from `ej2-vue-splitbuttons`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs14" %}

### SplitButton

To initialize SplitButton component refer [`SplitButton Getting Started documentation`](./../split-button/getting-started).

In the following example, SplitButton component is added by importing `SplitButtonPlugin` from `ej2-vue-splitbuttons`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs15" %}

## See Also

* [Show ButtonGroup selected state on initial render](./how-to/show-buttongroup-selected-state-on-initial-render)