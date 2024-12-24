---
layout: post
title: Content in Vue Tooltip component | Syncfusion
description: Learn here all about Content in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Content 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Content in Vue Tooltip component

Text or information assigned to the Tooltip's [`content`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#content) property will be displayed as the main content of the Tooltip. It can be a string or a template content. If the `content` property is not provided with any specific value, then it takes the value assigned to the `title` attribute of the target element on which the Tooltip was initialized. The content can also dynamically be assigned to the Tooltip via Fetch.

## Template content

By default, any text or image can be added to the Tooltip. To customize the Tooltip layout or to create your own visualized element in the Tooltip, a template can be used.

Refer to the following code example to add formatted HTML content to the Tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/content-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/content-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/content-cs1" %}

## Load dynamic Tooltip content

The Tooltip content can be dynamically loaded  by making use of the Fetch call. The Fetch request is usually made within the [`beforeRender`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#beforerender) event of the Tooltip, and then the Tooltip's `content` is assigned the value retrieved on it's success.

N> The Tooltip **target** property includes a unique identifier used to associate Tooltips with specific elements on a webpage or application interface. When setting the Tooltip **target** value as a GUID (Globally Unique Identifier), it's important to note that the GUID must start with a combination of **letters** before the numeric portion of the GUID. For example, **target: '#' +  ' tooltip'+ '96ad88bd-294c-47c3-999b-a9daa3285a05'**.

 {% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/ajax-content-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/ajax-content-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/ajax-content-cs1" %}