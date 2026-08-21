---
layout: post
title: Template in Vue Message | Syncfusion
description: Customize Vue Message content using a template with strings, paragraphs, or HTML elements and Vue Button components added to ejs-message.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Message

The message supports templates that allows the user to customize the content with a custom structure. The content can be a string, paragraph, or any other HTML element. The template can be rendered through the `content` property or added directly to the HTML element.

In the following sample, the Message component content is customized with HTML elements and Vue Button components, which are directly added to the `<ejs-message>` element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs9" %}