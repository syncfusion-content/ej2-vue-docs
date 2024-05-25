---
layout: post
title: Filtering data in Vue Mention component | Syncfusion
description: Learn here all about Filtering data in Syncfusion Vue Mention component of Syncfusion Essential JS 2 and more.
control: Filtering data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filtering data in Vue Mention component

The Mention component has built-in support to filter data items. The filter operation starts as soon as you start typing characters in the mention element.

## Limit the minimum filter character

You can control the minimum length of user input to initiate the search action using [minLength](https://ej2.syncfusion.com/vue/documentation/api/mention/#minlength) property. This can be useful if you have a very large list of data. The default value is 0, where suggestion the list opened as soon as the user inputs the mention character.

The remote request does not fetch the search data until the search key contains three characters as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs1" %}

## Change the filter type

While filtering, you can change the filter type to `Contains`, `StartsWith`, or `EndsWith` in the [filterType](https://ej2.syncfusion.com/vue/documentation/api/mention/#filtertype) property. The default filter operator is `Contains`.

* StartsWith - Filter the items that begin with the specified text value.
* Contains - Filter the items that contain the specified text value.
* EndsWith - Filter the items that end with the specified text value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs2" %}

## Allow spacing between search

While filtering, you can allow the space in the middle of the mention the data in the data source by using the [allowSpaces](https://ej2.syncfusion.com/vue/documentation/api/mention/#allowspaces) property. If the data source does not match with the mentioned element data, the popup will be hidden on the space key press. The default value of `allowSpaces` is `false`.

> By default, the `allowSpaces` property is disabled, and the space ends the mention component search.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs3" %}

## Customize the suggestion item count

While filtering, you can customize the number of list items to be displayed in the suggestion list by using the [suggestionCount](https://ej2.syncfusion.com/vue/documentation/api/mention/#suggestioncount) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/mention/filtering-data-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/filtering-data-cs4" %}