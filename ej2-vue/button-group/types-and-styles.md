---
layout: post
title: Types and Styles in Vue Button Group | Syncfusion
description: Learn about predefined visual types and styles in the Syncfusion Vue Button Group, including outline, primary, success, info, warning, and danger variants.
control: Types and styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Types and Styles in Vue Button Group

This section explains about different types and styles of ButtonGroup.

## ButtonGroup types

### Outline ButtonGroup

An Outline ButtonGroup has a border with transparent background. To create Outline ButtonGroup, `e-outline` class needs to be added to the target element and to the button element using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button/index-default#cssclass) property.

The following sample illustrates how to achieve outline ButtonGroup,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs16" %}

> ButtonGroup does not have support for `flat` and `round` types.

## ButtonGroup styles

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 ButtonGroup has the following predefined styles. This can be achieved by adding corresponding class name in each button elements using `cssClass` property.

| Class | Description |
| -------- | -------- |
| e-primary | Used to represent a primary action. |
| e-success | Used to represent a positive action. |
| e-info |  Used to represent an informative action. |
| e-warning | Used to represent an action with caution. |
| e-danger | Used to represent a negative action. |

The following example illustrates how to achieve predefined styles in ButtonGroup,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs17" %}

## See Also

* [ButtonGroup with icons](./how-to/create-buttongroup-with-icons)
* [Create ButtonGroup with rounded corner](./how-to/create-buttongroup-with-rounded-corner)