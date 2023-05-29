---
layout: post
title: Sparkline dimensions in Vue Sparkline component | Syncfusion
description: Learn here all about Sparkline dimensions in Syncfusion Vue Sparkline component of Syncfusion Essential JS 2 and more.
control: Sparkline dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Sparkline dimensions in Vue Sparkline component

## Size for container

Sparkline can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs24" %}
<!-- markdownlint-disable MD036 -->

## Size for sparkline

<!-- markdownlint-disable MD036 -->

You can also set the size for sparkline directly using the [`width`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#width-string) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/sparkline/#height-string) properties.

### In pixel

You can set the size for sparkline in pixel as demonstrated in the following code.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs25" %}

### In percentage

By setting values in percentage, sparkline gets its dimension with respect to its container. For example, when the height is set to ‘50%’, sparkline is rendered to half of its container height.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs26" %}
