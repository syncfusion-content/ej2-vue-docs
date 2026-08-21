---
layout: post
title: How to create collapsible tabs in Vue Tabs | Syncfusion
description: Allow Vue Tabs headers to be collapsed and expanded by the user using the header pressed event to toggle the tab content area visibility.
control: Create collapsible tabs 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create collapsible tabs in Vue Tabs

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