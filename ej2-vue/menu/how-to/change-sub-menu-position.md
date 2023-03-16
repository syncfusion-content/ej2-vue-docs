---
layout: post
title: Change sub menu position in Vue Menu component | Syncfusion
description: Learn here all about Change sub menu position in Syncfusion Vue Menu component of Syncfusion Essential JS 2 and more.
control: Change sub menu position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change sub menu position in Vue Menu component

The submenu position can be changed by using the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu/#beforeopen) event. Assign the top and left position where you want to open the submenu to the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu/#beforeopen) event arguments `args.top` and `args.left` respectively.

In the below sample, the sub menu opens above the parent menu item.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs9" %}

>> For custom positioning, set both `top` and `left` position in the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu/#beforeopen) event.