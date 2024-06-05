---
layout: post
title: Customization in Vue Tooltip component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Tooltip component

The Tooltip can be customized by using the `cssClass` property, which accepts custom CSS class names that define specific user-defined styles and themes to be applied on the Tooltip element.

## Tip pointer customization

Styling the tip pointer's size, background, and border colors can be done using the `cssClass` property, as given below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/custom-tip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/custom-tip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/custom-tip-cs1" %}

## Tooltip customization

The complete look and feel of the Tooltip can be customized by changing it's background color, opacity, content font, etc.

The following code example shows the way to achieve it.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/custom-tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/custom-tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/custom-tooltip-cs1" %}