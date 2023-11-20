---
layout: post
title: Globalization in Vue Datepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue Datepicker component

Globalization is the combination of  adapting the component to various languages by means of parsing and formatting the date or number [`Internationalization`](../common/internationalization) and also by adding cultural specific customizations and translating the text [`localization`](../common/localization)

By default, DatePicker date format, week and month names are specific to English culture. It utilizes the [`Essential JavaScript 2 Internationalization`](../common/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](https://cldr.unicode.org/) JSON data and it allows to load the culture specific CLDR JSON data by using `loadCldr` method

The DatePicker component supports only the Gregorian type of calendar. All the Essential JS 2 component are specific to English cultur ('en-US'). If you want to go with the different culture other than English, follow the below steps.

* Install the `CLDR-Data` package by using the below command (it installs the CLDR JSON data). To know more about CLDR-Data refer the
[`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

  ```
  npm install cldr-data --save
  ```

 Once the package installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Now import the installed CLDR JSON data into the `app.vue` file.

* Now use the `loadCldr` method to load the culture specific CLDR JSON data from the installed location to `app.vue` file.

* DatePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the DatePicker with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

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

> The `Localization` library allows you to localize default text content of the DatePicker. The DatePicker component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/datepicker/#locale) value and translation object.

Locale keywords |Text----- | -----today | Name of the button to choose Today date. placeholder | Hint to describe expected value in input element.

* Before changing the culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of
[L10n](https://ej2.syncfusion.com/documentation/api/base/l10n/#load) class.

```ts

//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'datepicker': { placeholder: 'Wählen Sie ein Datum aus', today: 'heute' }
    }
});
```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/datepicker/#locale) property. The following example demonstrates the DatePicker in `German` culture.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/locale-cs1" %}

## Right-To-Left

The DatePicker supports right-to-left functionality for languages like Arabic, Hebrew to displays the text in the right-to-left direction. Use
[`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/datepicker/#enablertl) property to set the RTL direction.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/rtl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/rtl-cs1" %}