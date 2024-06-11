---
layout: post
title: Xhtml validation in Vue Rich text editor component | Syncfusion
description: Learn here all about Xhtml validation in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Xhtml validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Xhtml validation in Vue Rich text editor component

The editor provides an option to validate the source content of the Rich Text Editor against the XHTML standard using the 'enableXhtml' property. When you enter or modify content in the editor, it continuously checks the XHTML source content and removes elements and attributes that are not valid.

The editor checks the following settings on validation:

## Attributes

* Must be specified in lowercase.
* Proper use of quotation marks around the attributes.
* Must be valid attributes for corresponding HTML element.
* All the required attributes must be included in the HTML element.

## HTML Elements

* Must be in lowercase.
* All opening tags must be closed.
* Allows only the valid HTML elements.
* Elements must be properly nested.
* All elements must have one root element.
* Should not use inline elements inside the block elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs14" %}