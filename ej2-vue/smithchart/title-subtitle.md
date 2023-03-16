---
layout: post
title: Title subtitle in Vue Smithchart component | Syncfusion
description: Learn here all about Title subtitle in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Title subtitle 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Title subtitle in Vue Smithchart component

## Enable title

Title and subtitle is used to depicts the information about the data plotted in the smithchart. You can set the title and subtitle of the smithchart using the [`text`] property in title and subtitle. By default visibility of the title as well as subtitle is enabled. You need to set simply text for title and subtitle in your sample as like below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs27" %}

## Title trim

Both title and subtitle of the smithchart can be trimmed if it exceeds the certain length. Trimming is enabled using [`enableTrim`] for title as well as subtitle. This length can be changed using the property [`maximumWidth`]. Also [`font`], [`textAlignment`] and [`visibility`] can be customized for title as well as subtitle.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs28" %}