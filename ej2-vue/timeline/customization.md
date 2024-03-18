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

You can customize the Timeline items dot size, connectors, dot borders, dot outer space and more to personalize its appearance. This section explains the different ways for styling the items.

## Connector styling

### Common styling

You can define the styles applicable to the all the Timeline item connectors.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/common-connector/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/common-connector" %}

### Individual styling

You can also apply unique styles to individual connectors, to differentiate specific items within the Timeline.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/individual-connector/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/individual-connector" %}

## Dot styling

### Dot color

You can modify the color of the dots to highlight the specific Timeline items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/dot-color/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-color" %}

### Dot size

You can adjust the size of the dot to make it larger or smaller by using the `--dot-size` variable.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/dot-size/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-size" %}

### Dot shadow

You can add shadow effects to the Timeline dots to make it feel visually engaging by using the `--dot-outer-space` & `--dot-border` variables.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/dot-shadow/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-shadow" %}

### Dot variant

You can achieve the desired dot variant by customizing the border, outline and background colors of the Timeline dots.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/dot-variant/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-variant" %}

### Dot outline

By adding the `e-outline` class to the Timeline `cssClass` property it enables the dots to have an outline state.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/dot-outline/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/dot-outline" %}
