---
layout: post
title: Orientation in Vue Tabs | Syncfusion
description: Display Vue Tabs headers on the top or bottom of the content area using the headerOrientation property to change the tab header position.
control: Orientation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Orientation in Vue Tabs

This section explains how to modify the position and overflow modes of the Tab header.

It allows placing the header inside the Tab component at different positions by using the [headerPlacement](https://ej2.syncfusion.com/vue/documentation/api/tab#headerplacement) property. The available positions are as follows:

* **Top**: Arranges Tab header items horizontally, with content placed below the header.
* **Bottom**: Arranges Tab header items horizontally, with content placed above the header.
* **Left**: Arranges Tab header items vertically, with content placed to the right of the header.
* **Right**: Arranges Tab header items vertically, with content placed to the left of the header.

It also adapts to the available space when the tab items exceed the view space. You can customize the overflow mode using the `overflowMode` property. The available modes are as follows:

* Scrollable
* Popup

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/orientation-tab-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/orientation-tab-cs3" %}