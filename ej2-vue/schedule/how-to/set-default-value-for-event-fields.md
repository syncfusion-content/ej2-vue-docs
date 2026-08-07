---
layout: post
title: Set Default Value for Event Fields in Vue Scheduler | Syncfusion
description: Learn how to set default values for new event fields in the Syncfusion Vue Scheduler editor window to pre-fill data on new appointments.
control: Scheduler
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set Default Value for Event Fields in Vue Scheduler

Event window default fields name like Title, Location, etc.. can be customized and default value can be set to Subject field using `default` property which will be added if an appointment is created with empty subject.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/how-to-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/how-to-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/how-to-cs2" %}