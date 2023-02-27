---
layout: post
title: Smithchart dimensions in Vue Smithchart component | Syncfusion
description: Learn here all about Smithchart dimensions in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart dimensions in Vue Smithchart component

You can render the smithchart either corresponding to its container size or you can set the size of the  smithchart as per your requirement. To render the smithchart corresponding to its container size, you need to set the size for the smithchart container. Else to set the size for the smithchart as per your requirement, you can use the width and height properties in the smithchart.

## Size for Container

You can render smithchart to it's container size. To achieve this, you need to specify the width and height of the smithchart's container via inline or CSS as demonstrated below.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs10" %}

## Size for Smithchart

<!-- markdownlint-disable MD036 -->

You can also set size for smithchart directly through [`width`] and [`height`] properties. Using this properties, you can directly mention the width and height of the smithchart in pixels or you can set the width and height in percentage.

**In Pixel**

In smithchart's width and height property, you can directly give values in pixels like below demonstration. This will render smithchart in same size as you mentioned in you code.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs11" %}

**In percentage**

You can also specify the width and height of the smithchart in percentage. If you mention the width and height in percentage, then smithchart will be render as per the percentage of it's container size. You can set the values in percentage like below demonstration.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs12" %}
