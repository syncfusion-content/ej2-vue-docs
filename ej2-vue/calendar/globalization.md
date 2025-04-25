---
layout: post
title: Globalization in Vue Calendar component | Syncfusion
description: Learn here all about Globalization in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue Calendar component

Globalization is the combination of internationalization and localization. You can adapt the component to various languages by parsing and formatting the date or number [Internationalization](../common/internationalization/), and also add culture specific customization and translation to the text ([localization](../common/localization/)).

By default, the Calendar date format, week, and month names are specific to American English culture. It uses the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](../common/internationalization/) package to parse and format date object based on the culture using the official [UNICODE CLDR](https://cldr.unicode.org/)  JSON data. It provides the [loadCldr](../common/internationalization/#loading-culture-data) method to load the culture-specific CLDR JSON data.

The Calendar component supports only the Gregorian type of calendar. All the Essential<sup style="font-size:70%">&reg;</sup> JS 2 component are specific to English culture ('en-US').
If you want to go with the different culture other than `English`, follow the below steps.

* Install the CLDR-Data package by using the below command (installs the CLDR JSON data).

To know more about CLDR data, refer to the [CLDR-Data](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

```
npm install cldr-data --save
```

Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now use the `loadCldr`methodto load the culture specific CLDR JSON data from the installed location to `app.vue` file.

* Calendar displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the Calendar with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts
//Load the loadCldr from ej2-base
import { loadCldr } from '@syncfusion/ej2-base';

import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as gregorian from 'cldr-data/main/de/ca-gregorian.json';
import * as numbers from 'cldr-data/main/de/numbers.json';
import * as timeZoneNames from 'cldr-data/main/de/timeZoneNames.json';
import * as weekData from 'cldr-data/supplemental/weekdata.json';// To load the culture based first day of week

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);
```

> The `Localization` library allows you to localize default text content of the Calendar. The Calendar component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/calendar#locale) value and translation object.

Locale keywords |Text
-----|-----
today | Name of the button to choose Today date.

* Before changing the culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of
[L10n](https://ej2.syncfusion.com/documentation/api/base/l10n#load) class.

```ts

//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized today value
L10n.load({
    'de': {
        'calendar': { today: 'heute' }
    }
});
```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/calendar#locale) property.

The following example demonstrates the Calendar in `German` culture

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/internationalization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/internationalization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/internationalization-cs1" %}

## Right-to-Left

The Calendar supports right-to-left functionality for languages like Arabic,  Hebrew, etc. To display text in the right-to-left direction, use
 [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/calendar#enablertl) property.

The following code example initializes the Calendar component in `Arabic` culture.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/rtl-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/rtl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/rtl-cs1" %}