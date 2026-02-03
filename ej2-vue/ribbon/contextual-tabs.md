---
layout: post
title: Ribbon Contextual Tabs in Vue Ribbon Component | Syncfusion
description: Check out and learn about Ribbon Contextual Tabs in Syncfusion Ribbon Vue Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon contextual tabs

Ribbon Contextual Tabs are special tabs that appear only when a specific object or context is selected, such as a table, image, or chart. They provide users with a set of tools relevant only to the selected item. These tabs can host all built-in and custom Ribbon items to perform specific actions.

## Visible tabs

You can control the initial visibility of a contextual tab by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonContextualTabSettings/#visible) property to `true` or `false` within the `e-ribbon-contextual-tab` directive.

## Adding contextual tabs

Add contextual tabs to the Ribbon by using the `e-ribbon-contextual-tabs` tag directive. You can define multiple contextual tabs, each containing one or more standard Ribbon tabs.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/add-contextual-tab/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/add-contextual-tab/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/add-contextual-tab" %}

## Selected tabs

The [isSelected](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonContextualTabSettings/#isselected) property determines which contextual tab is active upon initialization. Setting this property to `true` makes the corresponding tab the currently selected one.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/select-contextual-tab/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/select-contextual-tab/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/select-contextual-tab" %}

## Methods

The Ribbon provides methods to dynamically manage the visibility of contextual tabs after the component has been initialized.

### Show Tab

The [showTab](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#showtab) method makes a specific contextual tab visible in the Ribbon.

### Hide Tab

The [hideTab](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#hidetab) method hides a specific contextual tab in the Ribbon.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/contextual-tab-method/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/contextual-tab-method/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tab-method" %}