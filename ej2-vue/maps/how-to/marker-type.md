---
layout: post
title: Marker type in Vue Maps component | Syncfusion
description: Learn here all about Marker type in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Marker type 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Marker type in Vue Maps component

## Add different types of markers

Different marker objects can be added to the Maps component using the marker settings. To update different marker settings in Maps, please follow the given steps:

**Step 1**:

Initialize the Maps component with marker settings. Here, a marker has been added with specified latitude and longitude of California by using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#datasource) property. To customize the shape of the marker using the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#shape) property and change the border color and width of the marker using the [`border`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#border) property as mentioned in the following example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs44" %}

**Step 2**:

Customize the above option for n number of markers as mentioned in the following example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs45/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs45" %}