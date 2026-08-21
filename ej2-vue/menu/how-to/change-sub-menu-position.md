---
layout: post
title: How to change sub menu position in Vue Menu Bar | Syncfusion
description: Reposition Vue Menu Bar sub menus by setting custom top and left values in the beforeOpen event arguments to control where the popup appears.
control: Change sub menu position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to change sub menu position in Vue Menu Bar

The submenu position can be changed by using the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu/#beforeopen) event. Assign the top and left position where you want to open the submenu to the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu/#beforeopen) event arguments `args.top` and `args.left` respectively.

In the below sample, the sub menu opens above the parent menu item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/menu/getting-started-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/menu/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs9" %}

>> For custom positioning, set both `top` and `left` position in the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu/#beforeopen) event.