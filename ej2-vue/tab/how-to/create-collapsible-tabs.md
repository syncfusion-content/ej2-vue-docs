---
layout: post
title: Create collapsible tabs in Vue Tab component | Syncfusion
description: Learn here all about Create collapsible tabs in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Create collapsible tabs 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create collapsible tabs in Vue Tab component

You can achieve collapse and expand functionality in Tab by adding/removing a custom CSS class in the click event handler for each tab.
* Define a CSS class to set the style property display as none. Here 'collapse' class is added to the content element for hiding it.
* Bind the `select`  event for Tab to collapse the initially selected Tab item and bind custom click handler for the Tab headers.
* In the event handler, add and remove 'collapse' class to hide and show the corresponding Tab content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/collapsible-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/collapsible-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/collapsible-tab-cs1" %}