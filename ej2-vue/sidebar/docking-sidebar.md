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

In the following example, each list item includes an icon along with accompanying text. The visibility of the text is dynamically controlled through CSS rules based on the Sidebar's state. When the **enableDock** property is enabled, the **e-dock** class is applied, adjusting the text visibility accordingly. 

To show the icons alone in a docked (closed) state, the following CSS is applied:

```css
.e-dock.e-close span.e-text {
  display: none;
}
```

To show the text along with icons when the Sidebar is open, this CSS is used:

```css
.e-dock.e-open span.e-text {
  display: inline-block;
}
```

In the docked state, only icons in the list are visible, hinting at the hidden text content.

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
