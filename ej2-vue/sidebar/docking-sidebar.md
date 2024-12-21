---
layout: post
title: Docking sidebar in Vue Sidebar component | Syncfusion
description: Learn here all about Docking sidebar in Syncfusion Vue Sidebar component of Syncfusion Essential JS 2 and more.
control: Docking sidebar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Docking sidebar in Vue Sidebar component

The dock state of the Sidebar reserves some space on the page that always remains visible when the Sidebar is collapsed. It is used to show the short term of a content like icons alone instead of lengthy text. To achieve this , set [`enableDock`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#enabledock) to true and specify the required [`dockSize`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#docksize).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/getting-started-cs3" %}

## See Also

* [How to add sidebar navigation](./how-to/sidebar-with-treeview)