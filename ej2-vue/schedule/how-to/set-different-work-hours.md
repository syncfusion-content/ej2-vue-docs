---
layout: post
title: Set different work hours in Vue Schedule component | Syncfusion
description: Learn here all about Set different work hours in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Set different work hours 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set different work hours in Vue Schedule component

By default, the work hours of the Scheduler is highlighted based on the start and end values provided within the [`workHours`](../api/schedule/workHours/) property which remains same for all days. To highlight different work hours range for different days,[`setWorkHours`](../api/schedule/#setworkhours) method. You can pass date object/ multiple date objects collection as first argument and start and end time need to be added as work hours should be passed as second and third arguments respectively. In the following code example, on button click 11:00 AM to 08:00 PM of 15th and 17th February has been added in work hours.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/open-editor-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs2" %}