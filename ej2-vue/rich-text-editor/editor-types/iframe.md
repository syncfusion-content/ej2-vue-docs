---
layout: post
title: Iframe in Vue Rich text editor component | Syncfusion
description: Learn here all about Iframe in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Iframe 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# IFrame Editing Mode in Vue Rich Text Editor Component

The iframe editor in the Rich Text Editor component provides an isolated environment for content editing. It uses an iframe element to create a separate document, ensuring better compatibility and separation from the parent page's styles and scripts. In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe editor

To enable the iframe editor, you can use the [iframeSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

Here's an example of how to enable the iframe editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs16" %}

## Customizing IFrame attributes

You can add custom attributes to the body tag of the iframe using the attributes field of the [iframeSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs17" %}

## Integrating external CSS and scripts

The Rich Text Editor allows you to apply an external CSS file to style the iframe element. This can be done using the [styles](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#iframesettings) field in the iframeSettings property. By including an external CSS file, you can easily change the appearance of the editor’s content to meet your specific requirements.

Likewise, add the external script file to the `< iframe >` element using the [scripts](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#iframesettings) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/iframe-resources-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/iframe-resources-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-resources-cs1" %}

> You can also explore our [iframe in Vue Rich Text Editor example](https://ej2.syncfusion.com/vue/demos/#/material/rich-text-editor/iframe) that shows how to render the iframe in Vue Rich Text Editor.

## See also

* [Implementing Inline Editing](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/inline-editing)
* [Using the Markdown Editor](https://ej2.syncfusion.com/vue/documentation/markdown-editor/getting-started)