---
layout: post
title: Localization in Vue Sparkline component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Sparkline component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Sparkline component

The sparkline control supports localization. The default culture for localization is `en-US`. You can change the culture using the `setCulture` method.

## Tooltip format

Sparkline tooltip supports localization. The following code sample shows tooltip text with currency format based on culture.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs17" %}

## Rtl

If you set the `enableRtl` property to true, then the sparkline will be rendered from rigt-to-left direction.

The following example shows the sparkline is render from "Right-to-left".

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/sparkline/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs18" %}