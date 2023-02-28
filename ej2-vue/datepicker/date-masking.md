---
layout: post
title: Date masking in Vue Datepicker component | Syncfusion
description: Learn here all about Date masking in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Date masking 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Date masking in Vue Datepicker component

DatePicker has `enableMask` property that provides the option to enable the built-in date masking support. Also, you must inject the MaskedDateTime module to enable the masking support.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/mask-module-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/mask-module-cs1" %}

The mask pattern is defined based on the provided date format to the component. If the format is not specified, the mask pattern is formed based on the default format of the current culture.

| **Keys** | **Actions** |
| --- | --- |
| <kbd>Up / Down arrows</kbd> | To increment and decrement the selected portion of the date. |
| <kbd>Left / Right arrows and Tab</kbd> | To navigate the selection from one portion to next portion |

The following example demonstrates default and custom format of DatePicker component with mask module.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/mask-module-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/mask-module-cs2" %}

# Configure Mask Placeholder

You can change mask placeholder value through property `maskPlaceholder`. By default , it takes the full name of date and time co-ordinates such as `day`, `month`, `year`, `hour` etc.

While changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through load method of L10n class for mask placeholder values like below.

```ts
//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized mask placeholder value
L10n.load({
'de': {
    'datepicker': { day: 'Tag' , month: 'Monat', year: 'Jahr' }
}
});

```

The following example demonstrates default and customized mask placeholder value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/mask-module-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/mask-module-cs3" %}
