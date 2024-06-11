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

The Card can be created with header title, sub title and images. For adding header you need to create `div` element with the class `e-card-header` added.

Card provides below elements and corresponding class definitions to include header.

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

For adding header to the Card , you need to create wrapper `div` element with `e-card-header-caption` class.

* Place the `div` element with `e-card-header-title` class inside the header caption for adding main title.

* Place the div element with `e-card-sub-title` class inside the header caption element for adding sub-title.

### Image

Card header has an option for adding images in the header. It is aligned with either before or after the header based on the HTML element positioned in the header structure.

* The header image can be added by creating a `div` element with `e-card-header-image` class which can be placed before or after the header caption wrapper element.

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

Content in Card holds texts, images, links and all possible HTML elements. Its adaptable within the Card root element.

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