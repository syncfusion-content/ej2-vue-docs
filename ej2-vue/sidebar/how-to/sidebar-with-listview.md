---
layout: post
title: How to render Sidebar with ListView in Vue Sidebar | Syncfusion
description: Place a ListView component inside the Vue Sidebar content area to render navigable list items within the collapsible panel of the sidebar control.
control: Sidebar with listview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render Sidebar with ListView in Vue Sidebar

Any HTML element can be placed in the Sidebar's content area. The Sidebar supports various HTML structures such as `TreeView`, `ListView`, and others.

In the following example, the Sidebar is rendered with ListView component in its content area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/listview-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/listview-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/listview-cs2" %}