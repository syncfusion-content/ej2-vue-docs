---
layout: post
title: Set clear button in calendar in Vue Calendar component | Syncfusion
description: Learn here all about Set clear button in calendar in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Set clear button in calendar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set clear button in calendar in Vue Calendar component

To configure `clear` button in Calendar UI, do the following:

1. To the [`created`](https://ej2.syncfusion.com/vue/documentation/api/calendar/#created) event of the Calendar, add the required elements to make the clear button visible. In the following example, div with Essential<sup style="font-size:70%">&reg;</sup> JS 2 button component is used.

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