---
layout: post
title: Set different work hours in Vue Schedule component | Syncfusion
description: Learn here all about Set different work hours in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Set different work hours 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set Different Work Hours in Vue Schedule Component

By default, the work hours of the Schedule component are highlighted uniformly for all days based on the start and end time values defined in the [`workHours`](../api/schedule#workHours) property. To apply different work hour ranges for specific dates, the [`setWorkHours`](../api/schedule#setworkhours) method can be used. This method accepts a single date object or a collection of date objects as the first argument, followed by the start time and end time as the second and third arguments. In the example below, the work hours for February 15 and 17 are updated to display a range from 11:00 AM to 08:00 PM upon button interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/open-editor-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/open-editor-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs2" %}