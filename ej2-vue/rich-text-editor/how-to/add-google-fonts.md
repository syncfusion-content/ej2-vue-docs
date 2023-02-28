---
layout: post
title: Add google fonts in Vue Rich text editor component | Syncfusion
description: Learn here all about Add google fonts in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Add google fonts 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add google fonts in Vue Rich text editor component

To use web fonts in Rich Text Editor, it is not needed for the web fonts to be present in local machine. To add the web fonts to Rich Text Editor, we need to refer the web font links and add the font names in the [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#fontfamily) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/toolbar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs4" %}

The below font style links are referred in the page.

```ts

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that we have added two Google web fonts (`Roboto` and `Great vibes`) to `Rich Text Editor`.
