---
layout: post
title: How to in Vue Rich text editor component | Syncfusion
description: Learn here all about How to in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: How to 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to in Vue Rich text editor component

## Add Google fonts

To use web fonts in RTE, it is not needed for the web fonts to be present in local machine. To add the web fonts to RTE, we need to refer the web font links and add the font names in the [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api-richTextEditor.html#fontfamily) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs1" %}

The below font style links are referred in the page.

```ts

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that we have added two Google web fonts (`Roboto` and `Great vibes`) to `RTE`.

## Change default font-family

By using [`default`](https://ej2.syncfusion.com/vue/documentation/api-richTextEditor.html#fontfamily) property, you can change the default font-family of the RTE. To change the font-family of the RTE content while loading, we need to give the font-family in the style section with the help of [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api-richTextEditor.html#cssclass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs2" %}


## How to customize the placeholder style

By using `rte-placeholder` class, you can customize the placeholder style.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs13" %}

## Set the cursor at the specific range

This can be achieved by using `setRange` method in the RTE using `NodeSelection` instance. In this below sample, we have passed the text node (specific location in RTE content) in `setStart` method and passed the range in `setRange` method of RTE.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs5" %}