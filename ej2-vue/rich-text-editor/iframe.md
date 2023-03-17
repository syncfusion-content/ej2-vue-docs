---
layout: post
title: Iframe in Vue Rich text editor component | Syncfusion
description: Learn here all about Iframe in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Iframe 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Iframe in Vue Rich text editor component

When the iframeSettings option is enabled, the Rich Text Editor creates the iframe element as the content area on control initialization; it is used to display and editing the content. In content area, the editor displays only the body tag of a `<iframe>` document.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs16" %}

## IFrame attributes

The editor allows you to pass an additional attribute to body tag of a `<iframe>` element using attributes fields of the [iframeSettings](../api/rich-text-editor/iFrameSettings/#iframesettings) property. This property contains name/value pairs in string format. It is used to override the default appearance of the content area.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs17" %}

## Adding external CSS/Script file

The editor offers you to add external CSS file to style the `<iframe>` element. Easily change the appearance of editor’s content using an external CSS file using [styles](../api/rich-text-editor/resources/#styles) field in the iframeSettings property.

Likewise, add the external script file to the `<iframe>` element using the [scripts](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/resources/#scripts) field of iframeSettings to provide the additional functionalities to the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/iframe-resources-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-resources-cs1" %}

## See Also

* [How to change the editor mode](./editor-modes/#markdown-editor)