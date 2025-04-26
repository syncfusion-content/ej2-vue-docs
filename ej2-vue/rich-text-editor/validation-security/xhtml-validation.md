---
layout: post
title: Xhtml validation in Vue Rich text editor component | Syncfusion
description: Learn here all about Xhtml validation in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Xhtml validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Xhtml Validation in Vue Rich Text Editor Component

The editor includes an [enableXhtml](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#enablexhtml) property that allows for continuous validation of the Rich Text Editor's source content against the XHTML standard. When content is entered or modified in the editor, this feature ensures ongoing compliance by automatically removing invalid elements and attributes.

The editor checks the following settings on validation:

## Validating attributes

* **Case Sensitivity**: All attributes must be in lowercase.
* **Quotation Marks**: Proper use of quotation marks around attribute values is enforced.
* **Validity**: Only valid attributes for corresponding HTML elements are allowed.
* **Required Attributes**: All required attributes for HTML elements must be included.

## Validating HTML elements

* **Case Sensitivity**: All HTML tags must be in lowercase.
* **Proper Closing**: All opening tags must have corresponding closing tags.
* **Element Validity**: Only valid HTML elements are permitted.
* **Nesting**: Elements must be properly nested to maintain structure.
* **Root Element**: The content must have a single root element.
* **Element Hierarchy**: Inline elements cannot contain block elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs14" %}

## Cross-Site scripting (XSS)

The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

### Enable XSS validation

The [enableHtmlSanitize](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#enablehtmlsanitizer) property determines whether XSS prevention is active. It's set to `true` by default.

In the following sample, we removed the `script` tag and `onmouseover` attribute from the content of the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs27" %}

> The XSS prevention feature is only applicable when the [editorMode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor#editormode) is set to HTML.

### Custom cross-site scripting prevention

For more precise control over XSS prevention, you can implement custom filtering logic using the [beforeSanitizeHtml](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#beforesanitizehtml) event.

### Implementing custom cross-site scripting and fililtering in Rich Text Editor

1. Use the [beforeSanitizeHtml](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#beforesanitizehtml) event to define custom filtering rules.
2. Utilize the `helper` function from the event argument to apply your custom filters.
3. Set the `cancel` argument to `true` if you want to override the built-in XSS prevention entirely.

The following sample demonstrates how to filter the `script` tag by value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs28" %}

You can also filter out the [`e.selectors.tags`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/sanitizeSelectors/#tags) and [`e.selector.attributs`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/sanitizeSelectors/#attributes) in the [beforeSanitizeHtml](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#beforesanitizehtml) event to control which HTML tags and attributes are allowed to appear. 

For instance, if you want to display `<iframe>`, By manipulating the `e.selectors.tags` property in this event, you can selectively remove tags like `<iframe>`. This approach ensures that your application can safely display iframes while preventing potential security risks associated with XSS vulnerabilities.

The following sample demonstrates how to filter the `iframe` tag.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/prevent-cross-site-scripting-cs1" %}