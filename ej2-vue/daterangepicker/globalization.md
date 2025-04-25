---
layout: post
title: Globalization in Vue Daterangepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion Vue Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue Daterangepicker component

Globalization is the combination of internationalization and localization. You can adapt the component to various languages by parsing and formatting the date or number (Internationalization), and also add culture specific customization and translation to the text (Localization).

By default, DateRangePicker date format, week, and month names are specific to the English culture. It utilizes the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 Internationalization](../common/internationalization) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](https://cldr.unicode.org/) JSON data. It allows to load culture specific CLDR JSON data by using `loadCldr` method.

To use a different culture other than `English`, follow the below steps:

* Install the `CLDR-Data` package by using the below command (Installs the CLDR JSON data). To know more about CLDR-Data refer to the[`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

  ```
  npm install cldr-data --save
  ```

 Once the package is installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Import the installed CLDR JSON data into the `app.vue` file.

* Use the `loadCldr` method to load the culture specific CLDR JSON data from the installed location to `app.vue` file.

* DateRangePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the DateRangePicker with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

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

> The `Localization` library allows you to localize default text content of the DateRangePicker. The DateRangePicker component has static text for  **today** feature that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker#locale) value and translation object.

Locale keywords |Text
-----|-----
placeholder | Hint to describe expected value in input element.
startLabel | Label to represent the start date.
endLabel | Label to represent the end date.
applyText | Text present in the apply button.
cancelText | Text present in the cancel button.
selectedDays | Text to represent selected days.
days | Text represents days.
customRange | Text present in the custom range button in presets container.

* Before changing to a culture other than `English`, ensure that locale text for the concerned culture is loaded through `load` method of
[L10n](https://ej2.syncfusion.com/documentation/api/base/l10n#load) class.

```ts

//Load the L10n, loadCldr from ej2-base
import { loadCldr, L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'daterangepicker': { placeholder: 'Wählen Sie ein Datum aus' }
    }
});
```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker#locale) property.

The following example demonstrates the DateRangePicker in `German` culture.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/daterangepicker/locale-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/daterangepicker/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/locale-cs1" %}

## Right-To-Left

The DateRangePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker#enablertl) property to set the RTL direction. The following code example initialize the DateRangePicker component in `Hebrew` culture and also explains how to set the localized text to the placeholder using `load` method of
[L10n](https://ej2.syncfusion.com/documentation/api/base/l10n#load) class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/daterangepicker/locale-rtl-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/daterangepicker/locale-rtl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/locale-rtl-cs1" %}

## Customize the date format

Representation of start and end date strings can be customized to required format by using [`format`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker#format) property.
By default, the format is based on the culture. To know more about the date format standards, refer to the Internationalization Date Format section. In the following sample, the date strings are formatted to `yyyy-MM-dd` and in between the string "to" is set as a [`separator`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker#separator).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/daterangepicker/getting-started-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/daterangepicker/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs6" %}