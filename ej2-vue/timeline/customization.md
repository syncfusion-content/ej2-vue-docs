---
layout: post
title: Customization in Vue Timeline component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Timeline component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Timeline component

Customize Timeline item appearance — dot size, connectors, borders, spacing, and more. This section explains the available styling options and how to apply them.

## Connector styling

### Common styling

Define styles that apply to all Timeline item connectors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/common-connector/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/common-connector/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/common-connector" %}

### Individual styling

You can also apply unique styles to individual connectors, to differentiate specific items within the Timeline.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/individual-connector/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/individual-connector/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/individual-connector" %}

## Dot styling

### Dot color

Modify dot colors to highlight specific Timeline items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-color/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-color/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-color" %}

### Dot size

Adjust the size of the dot to make it larger or smaller by using the `--dot-size` variable.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-size/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-size/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-size" %}

### Dot shadow

Add shadow effects to Timeline dots using the `--dot-outer-space` and `--dot-border` CSS variables.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-shadow/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-shadow/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-shadow" %}

### Dot variant

Create different dot variants by customizing border, outline, and background colors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-variant/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-variant/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-variant" %}

### Dot outline

Add the `e-outline` class to the Timeline [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/timeline#cssclass) property to enable an outline state for dots.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-outline/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/timeline/dot-outline/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-outline" %}