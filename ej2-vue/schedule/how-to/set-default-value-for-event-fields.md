---
layout: post
title: Set default value for event fields in Vue Schedule | Syncfusion
description: Learn here all about Set default value for event fields in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Set default value for event fields 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set Default Value for Event Fields in Vue Schedule Component

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