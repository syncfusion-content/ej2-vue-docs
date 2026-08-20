---
layout: post
title: How to set the clear button in Vue Calendar | Syncfusion
description: Add a Clear button to the Syncfusion Vue Calendar footer using the created event to reset the selected date value.
control: Set clear button in calendar
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set the clear button in Vue Calendar

To configure `clear` button in Calendar UI, do the following:

1. To the [`created`](https://ej2.syncfusion.com/vue/documentation/api/calendar#created) event of the Calendar, add the required elements to make the clear button visible. In the following example, div with Essential<sup style="font-size:70%">&reg;</sup> JS 2 button component is used.

2. When the `e-footer` class is used, the div tag acts as the footer.

3. Using these button,  selected date can be cleared.

4. Bind the required event handler to the button tags to update the value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs9" %}