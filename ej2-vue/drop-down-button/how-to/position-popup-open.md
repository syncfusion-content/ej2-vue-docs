---
layout: post
title: How to position popup open in Vue Dropdown Button | Syncfusion
description: Change the open position of the Vue Dropdown Button popup by setting top and left values for the popup element in the open event.
control: Position popup open 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to position popup open in Vue Dropdown Button

Popup open position can be changed according to the requirement. Popup open position can be changed in [`open`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#open) event by setting `top` and `left` for the popup element.

In the following example, the `top` position of the popup element is changed in `open` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs11" %}