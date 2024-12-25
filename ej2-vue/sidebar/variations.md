---
layout: post
title: Variations in Vue Sidebar component | Syncfusion
description: Learn here all about Variations in Syncfusion Vue Sidebar component of Syncfusion Essential JS 2 and more.
control: Variations 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Variations in Vue Sidebar component

The Sidebar component's expand behavior can be modified based on its intended use.

## Expanding types of sidebar

The Sidebar can be set to initialize based on four different types that are consistent with the main component as explained below. When `dataBind` is invoked, it applies the pending property changes immediately to the component.

 | Item | Description |
|-----|-----|
| [`Over`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#type) | Sidebar floats over the main content area.|
| [`Push`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#type) | Sidebar pushes the main content area to appear side-by-side and shrinks the main content to fit within the screen width.|
| [`Slide`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#type) |Sidebar translates the x and y positions of the main content area based on the Sidebar width. |
| [`Auto`](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#type) | Sidebar with `Over` type in mobile resolution, and `Push` type in other higher resolutions. |

> `Auto` is the default expand mode.

In the following sample, the types of Sidebar are demonstrated.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/position-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/position-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/position-cs3" %}

## See Also

* [How to add sidebar with custom animation](./how-to/sidebar-with-variation-animation)
* [How to add multiple sidebar](./how-to/multiple-sidebar)