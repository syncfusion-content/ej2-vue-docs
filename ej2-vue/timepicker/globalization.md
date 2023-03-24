---
layout: post
title: Globalization in Vue Timepicker component | Syncfusion
description: Learn here all about Globalization in Syncfusion Vue Timepicker component of Syncfusion Essential JS 2 and more.
control: Globalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue Timepicker component

Globalization is the combination of internalization and localization. You can adapt the component to various languages by parsing and formatting the date or number [`internationalization`](../common/internationalization/), and also add culture specific customization and translation to the text [`localization`](../common/localization/).

By default, the time format and meridian names are specific to the `American English` culture. It utilizes the [`Essential JavaScript 2 Internationalization`](../common/internationalization/) package to parse and format the date object based on the culture by using the official [`UNICODE CLDR`](https://cldr.unicode.org/) JSON data. It provides the `loadCldr` method to load culture specific CLDR JSON data. To use a different culture other than `English`, follow the steps below:

* Install the `CLDR-Data` package by using the following command (installs all the CLDR JSON data). To know more about CLDR-Data refer to the [`CLDR-Data`](https://cldr.unicode.org/index/cldr-spec/cldr-json-bindings) link.

  ```
  npm install cldr-data --save
  ```

Once the package is installed, you can find the culture specific JSON data under the location `/node_modules/cldr-data`.

* Import the installed CLDR JSON data into the `app.vue` file.

* Use the [`loadCldr`](../common/internationalization#cldr-data-dependencies)
method to load the culture specific CLDR JSON data from the installed location to `app.vue` file.

* TimePicker displayed `Sunday` as the first day of week based on default culture ("en-US"). If you want to display the TimePicker with loaded culture’s first day of week, you need to import `weekdata.json` file from the `cldr-data/suppemental` as given in the code example.

```ts
//Load the loadCldr from ej2-base
import { loadCldr } from '@syncfusion/ej2-base';

import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as gregorian from 'cldr-data/main/de/ca-gregorian.json';
import * as numbers from 'cldr-data/main/de/numbers.json';
import * as weekData from 'cldr-data/supplemental/weekdata.json';// To load the culture based first day of week

loadCldr(numberingSystems, gregorian, numbers, weekData);
```

* Before changing to a culture other than `English`, ensure that the\ locale text for the concerned culture is loaded through [`L10n.load`](https://ej2.syncfusion.com/documentation/api/base/l10n#load)method.

```ts

//Load the L10n from ej2-base
import { L10n } from '@syncfusion/ej2-base';

//load the locale object to set the localized placeholder value
L10n.load({
    'de': {
        'timepicker': { placeholder: 'Wählen Sie Zeit' }
    }
});
```

* Set the culture by using the [`locale`](https://ej2.syncfusion.com/vue/documentation/api/timepicker#locale) property.

The following example demonstrates the TimePicker in `German` culture.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timepicker/locale-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/locale-cs1" %}

## Right-To-Left

The TimePicker supports RTL (right-to-left) functionality for languages like Arabic and Hebrew to displays the text in the right-to-left direction. Use [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/timepicker#enablertl) property to set the RTL direction.

The code example demonstrates the TimePicker component in `Arabic` culture. It also explains how to set localized text to the placeholder using [`L10n.load`](https://ej2.syncfusion.com/documentation/api/base/l10n#load) method.

`
{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timepicker/locale-rtl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/locale-rtl-cs1" %}