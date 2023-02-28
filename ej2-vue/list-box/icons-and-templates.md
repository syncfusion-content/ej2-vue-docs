---
layout: post
title: Icons and templates in Vue List box component | Syncfusion
description: Learn here all about Icons and templates in Syncfusion Vue List box component of Syncfusion Essential JS 2 and more.
control: Icons and templates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Icons and templates in Vue List box component

## Icons

To place the icon on a list box, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/list-box/fieldSettingsModel/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the list.

In the following sample, icon classes are mapped with `iconCss` field.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/list-box/getting-started/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs15" %}

## Templates

ListBox items can be customized according to the requirement using [`itemTemplate`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#itemtemplate) property.

In the following sample, the items in the cart are displayed using list box template,

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/list-box/getting-started/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs16" %}