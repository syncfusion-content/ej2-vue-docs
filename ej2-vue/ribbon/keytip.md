---
layout: post
title: Ribbon Keytip in Vue Ribbon component | Syncfusion
description:  Learn here all about Ribbon Keytip in Syncfusion Vue Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
---

# Keytips in Vue Ribbon component

The Ribbon component supports KeyTips to provide keyboard navigation for its items. This feature can be enabled by setting the [enableKeyTips](https://ej2.syncfusion.com/vue/documentation/api/ribbon#enablekeytips) property to `true`.

The keytips will be shown when the `Alt + Windows/Command` keys are pressed. This allows users to access any Ribbon element by pressing the corresponding keys.

## Ribbon items keytip

You can assign a KeyTip to any Ribbon item, including tabs, groups, and individual controls, using the [keyTip](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#keytip) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/item-keytip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/item-keytip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/keytips/item-keytip" %}

## File menu keytip

A KeyTip can be assigned to the File Menu button using the [keyTip](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#keytip) property within the `fileMenuSettings`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/filemenu-keytip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/filemenu-keytip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/keytips/filemenu-keytip" %}

## Backstage menu keytip

You can assign KeyTips to Backstage menu items by defining the [keyTip](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageItem/#keytip) property for each item in the Backstage configuration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/backstagemenu-keytip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/backstagemenu-keytip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/keytips/backstagemenu-keytip" %}

## Ribbon layout switcher keytip

A KeyTip can be added to the layout switcher button using the [layoutSwitcherKeyTip](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonModel/#layoutswitcherkeytip) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/layout-keytip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/layout-keytip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/keytips/layout-keytip" %}

## Ribbon launcher icon keytip

A KeyTip can be assigned to a group's launcher icon using the [launcherIconKeyTip](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroup/#launchericonkeytip) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/launcher-keytip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/keytips/launcher-keytip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/keytips/launcher-keytip" %}

## Methods

### Show keytips

Use the [showKeyTips](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonKeyTip/#showkeytips) method to display the KeyTips dynamically. To navigate into a specific tab's or group's KeyTips, pass its KeyTip as an argument. For instance, `showKeyTips('H')` will show the KeyTips for all items under the element assigned the 'H' KeyTip.

### Hide keytips

Use the [hideKeyTips](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonKeyTip/#hidekeytips) method to hide all visible KeyTips on the Ribbon.

## Guidelines for adding keytips

Before adding keytips to the ribbon items consider the following:

* Avoid using the same keytip setting on multiple items.

> For example: When you add the keytip text `H` or `HF` for the same items, it activates the first item occurrence of `H`, while any subsequent instances of `H` or `HF` are ignored.
* Do not use the same first letter for the single and double keytip items.

> For example: When accessing keytip text `F`, `FP` and `FPF` added for the different ribbon items and pressing `F` key, only the `F` key tip associated item will be activated while the `FP`, `FPF` configured ribbon items will be ignored.
