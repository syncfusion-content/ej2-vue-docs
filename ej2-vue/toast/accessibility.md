---
layout: post
title: Accessibility in Vue Toast component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Vue Toast component

The toast component has been designed with [WAI-ARIA](https://www.w3.org/TR/wai-aria/) specifications in mind by applying the prompt WAI-ARIA roles, states, and properties with the keyboard support. It helps users who use assistive WAI-ARIA accessibility support, which is achieved using attributes.

It provides information about the elements in a document for assistive technology.

The toast component implements the keyboard navigation support by using the following [WAI-ARIA practices](https://www.w3.org/TR/wai-aria-practices/) and is tested in major screen readers.

## ARIA attributes

<!-- markdownlint-disable MD033 -->

| Class | Description |
| -------- | -------- |
| role | <b>alert:</b> Identifies the element as a container when alert content will be added or updated. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toast/accessibility-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/accessibility-cs1" %}