---
layout: post
title: How to disable in Vue Button Group | Syncfusion
description: Learn how to disable a particular button or the entire Syncfusion Vue Button Group by adding the disabled attribute to button or input elements.
control: Disable 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to disable in Vue Button Group

## Particular button

To disable a particular button in a ButtonGroup, [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/button/index-default#disabled) attribute needs to be added to corresponding button element.

## Whole ButtonGroup

To disable whole ButtonGroup, [`disabled`](https://ej2.syncfusion.com/vue/documentation/api/button/index-default#disabled) attribute needs to be added to all the button elements. 

The following example illustrates how to disable the particular and the whole ButtonGroup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button-group/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs6" %}

> To disable radio/checkbox type ButtonGroup, the `disabled` attribute should be added to the input element.