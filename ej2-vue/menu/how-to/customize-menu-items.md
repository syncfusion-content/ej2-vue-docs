---
layout: post
title: Customize menu items in Vue Menu component | Syncfusion
description: Learn here all about Customize menu items in Syncfusion Vue Menu component of Syncfusion Essential JS 2 and more.
control: Customize menu items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize menu items in Vue Menu component

## Add or remove menu items

Menu items can be added or removed using the [`insertAfter`](https://ej2.syncfusion.com/vue/documentation/api/menu#insertafter), [`insertBefore`](https://ej2.syncfusion.com/vue/documentation/api/menu#insertbefore) and [`removeItems`](https://ej2.syncfusion.com/vue/documentation/api/menu#removeitems) methods.

In the following example, the **Europe** menu items are added before the **Oceania** item, the **Africa** menu items are added after the **Asia**, and the **South America** and **Mexico** items are removed from menu.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs11" %}

> To process items with `ID` values, set `isUnique` to `true`.

## Enable or disable menu items

You can enable and disable the menu items using the [`enableItems`](https://ej2.syncfusion.com/vue/documentation/api/menu#enableitems) method in Menu. To enable menuItems, set the `enable` property in argument to `true` and vice-versa.

Install Syncfusion `Buttons` packages using below command.

```bash
npm install @syncfusion/ej2-vue-buttons --save
```

In the following example, the **Directory** header item, **Conferences**, and **Music** sub menu items are disabled.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs12" %}

> To disable sub menu items, use the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu#beforeopen) event.

## Hide or show menu items

You can show or hide the menu items using the [`showItems`](https://ej2.syncfusion.com/vue/documentation/api/menu#showitems) and [`hideItems`](https://ej2.syncfusion.com/vue/documentation/api/menu#hideitems) methods.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/menu/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs13" %}

> Using the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/menu#beforeopen) event, you can hide the sub menu items as in the above example since the menu supports to hide items only for headers initially.
