---
layout: post
title: Update value in Vue Rich text editor component | Syncfusion
description: Learn here all about Update value in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Update value 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Update value in Vue Rich text editor component

To achieve this, we need to bind the `keydown` event to the Rich Text Editor content and capture the `ctrl + s` key press using its keyCode.
In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#value) property and then we can save the content in the required database using the same.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs11" %}