---
layout: post
title: Events in Vue MultiColumn Combobox component | Syncfusion
description: Checkout and learn about events with Vue MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue MultiColumn ComboBox component

This section describes the multicolumn combobox events that will be triggered when appropriate actions are performed. The following events are available in the multicolumn combobox component.

## actionBegin

The [actionBegin](../api/multicolumn-combobox#actionbegin) event is triggered when actions such as sorting, filtering, grouping starts.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/actionBegin/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/actionBegin/app.vue %}
{% endhighlight %}
{% endtabs %}

## actionFailure

The [actionFailure](../api/multicolumn-combobox#actionfailure) event is triggered when the data fetch request from the remote server fails.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/actionFailure/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/actionFailure/app.vue %}
{% endhighlight %}
{% endtabs %}

## actionComplete

The [actionComplete](../api/multicolumn-combobox#actioncomplete) event is triggered when actions such as sorting, filtering, grouping are completed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/actionComplete/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/actionComplete/app.vue %}
{% endhighlight %}
{% endtabs %}

## select

The [select](../api/multicolumn-combobox#select) event is triggered when the popup item is selected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/select/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/select/app.vue %}
{% endhighlight %}
{% endtabs %}

## change

The [change](../api/multicolumn-combobox#change) event is triggered when the popup item is selected or when the model value is changed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/change/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/change/app.vue %}
{% endhighlight %}
{% endtabs %}

## filtering

The [filtering](../api/multicolumn-combobox#filtering) event is triggered when typing a character in the component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/filtering/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/filtering/app.vue %}
{% endhighlight %}
{% endtabs %}

## open

The [open](../api/multicolumn-combobox#open) event is triggered when the popup is opened.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/open/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/open/app.vue %}
{% endhighlight %}
{% endtabs %}

## close

The [close](../api/multicolumn-combobox#close) event is triggered when the popup is closed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/close/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/events/close/app.vue %}
{% endhighlight %}
{% endtabs %}
