---
layout: post
title: Header content in Vue Card component | Syncfusion
description: Learn here all about Header content in Syncfusion Vue Card component of Syncfusion Essential JS 2 and more.
control: Header content 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Header content in Vue Card component

## Header

A Card can include a header with a title, subtitle, and image. Add a header by creating a `div` element with the `e-card-header` class.

Card provides the following header elements and corresponding class definitions.

Elements   | Description
------------ | -------------
Caption | It is the wrapper element to include title and sub-title.
Image | It supports to include header images with the specified dimensions.

Class   | Description
------------ | -------------
`e-card-header-caption` | To group the title and subtitle within the header which acts as wrapper.
`e-card-header-title` |  Main title text with in the header.
`e-card-sub-title` | A sub-title within the header.
`e-card-header-image` | To include heading image within the header.
`e-card-corner` | To add rounded corner for the image.

### Title and Subtitle

To add a header caption, create a wrapper `div` with the `e-card-header-caption` class.

* Place a `div` with the `e-card-header-title` class inside the header caption to add the main title.

* Place a `div` with the `e-card-sub-title` class inside the header caption to add the subtitle.

### Image

The Card header supports adding images. The header image can be positioned before or after the header caption depending on its placement in the header markup.

* Add a `div` with the `e-card-header-image` class to include a header image; place it before or after the caption wrapper as needed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/card/header-content/image-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/card/header-content/image-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/header-content/image-cs1" %}

## Content

Card content can contain text, images, links, and other HTML elements. Its adaptable within the Card root element.

* Create a `div` element with the class `e-card-content`.
* Place content `div` element in the Card root element or within any Card inner elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/card/header-content/content-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/card/header-content/content-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/header-content/content-cs1" %}