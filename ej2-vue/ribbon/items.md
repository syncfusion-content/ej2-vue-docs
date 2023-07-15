---
layout: post
title: Items in Vue Ribbon Component | Syncfusion
description: Check out and learn about Items in Syncfusion Vue Ribbon Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Items

## Built-in Ribbon items

By using the [Items](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCollectionModel/#items) property, the ribbon items type should be specified in the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemModel/#type) property to define the built-in items.

The following items can be rendered as built in items

| Built-in Ribbon Items | Actions |
|------------------------|---------|
| Button | Renders button as ribbon item.|
| CheckBox | Renders checkbox as ribbon item.|
| DropDown | Renders dropdownbutton as ribbon item.|
| SplitButton | Renders splitbutton as ribbon item.|
| ComboBox | Renders combobox as ribbon item.|
| ColorPicker | Renders color picker as ribbon item.|

### Button

By setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemModel/#type)property to `Button` you can render a Button item. You can also customize the button item using the [ribbonButtonSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettingsModel/) which provides options such as `iconCss`, `content`, `isToggle` and more.

#### Toggle Button

The [isToggle](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettingsModel/#istoggle) property can be used to define whether the button is a toggle button or not. By default the value is `false`.

```html

<template>
    <ejs-ribbon>
        <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
            <e-ribbon-groups>
            <e-ribbon-group header="Clipboard">
                <e-ribbon-collections>
                <e-ribbon-collection>
                    <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="cutButton">
                    </e-ribbon-item>
                    </e-ribbon-items>
                </e-ribbon-collection>
                </e-ribbon-collections>
            </e-ribbon-group>
            </e-ribbon-groups>
        </e-ribbon-tab>
        </e-ribbon-tabs>
    </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
  data: function () {
    return {
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut", isToggle: true },
    };
  }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

### CheckBox

By setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemModel/#type)property to `CheckBox` you can render a CheckBox item. You can also customize the CheckBox item using the [ribbonCheckBoxSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/) which provides options such as `labelPosition`, `label`, `checked` and more.

#### CheckBox State

The [checked](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#checked) property is used to handle the checked and unchecked state. The CheckBox will display a tick mark when it is checked. By default the value is `false`.

```html

<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="CheckBox" :checkBoxSettings="rulerSettings">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
        return {
            rulerSettings: {
            label: 'Ruler',
            checked: true
            }
        };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

#### Label and label Position

The [label](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property can handle the caption for a CheckBox. This helps in reducing the need for manually adding a separate label element.
The [labelPosition](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property, which allows you to specify whether the label should appear before or after the CheckBox.

```html

<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="CheckBox" :checkBoxSettings="rulerSettings">
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
        return {
            rulerSettings: {
            label: 'Ruler',
            checked: true,
            labelPosition: "Before"
            }
        };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

### DropDown

By setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type)property to `DropDown` you can render a DropDown item. You can also customize the DropDown item through [ribbonDropDownSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettingsModel/) which provides options such as `iconCss`, `content`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector to be shown in the DropDownButton popup.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/dropdown-target/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/dropdown-target" %}

### SplitButton

By setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type)property to `SplitButton` you can render a SplitButton item. You can also customize the SplitButton item through [ribbonSplitButtonSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettingsModel/) which provides options such as `iconCss`, `items`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property specifies the element selector to be shown in the SplitButton popup.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/splitbutton-target/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/splitbutton-target" %}

### ComboBox

By setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type)property to `ComboBox` you can render a ComboBox item. You can also customize the ComboBox item through [ribbonComboBoxSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/) which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

#### Filtering

The [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property provides built-in support for filtering data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found, the value of the `noRecordsTemplate` property will be displayed. By default the value is `false`.

```html

<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
        return {
            styleOptions: {
                dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
                allowFiltering: true
            }
        };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

#### Index

The [index](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/#index) property can be used to specify the index of the selected item in the combobox.

```html

<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
        return {
            styleOptions: {
                dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
                index: 3
            }
        };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

#### SortOrder

The [sortOrder](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/#sortorder) property is used to select the order in which the DataSource should be sorted.

`None` - The data source is not sorted.
`Ascending` - The data source is sorted in ascending order.
`Descending` - The data source is sorted in descending order.

```html

<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
        return {
            styleOptions: {
                dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
                index: 3,
                sortOrder: "Descending"
            }
        };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

### ColorPicker

By setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type)property to `ColorPicker` you can render the ColorPicker item. You can also customize the ColorPicker item through [ribbonColorPickerSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettingsModel/) which provides options such as `value`, `columns`, `showButtons` and more.

#### Value

By using the [value](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property you can specify the value color. The value should be a valid hex color code.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
                  </e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
    data: function () {
        return {
            colorPicker: {
            value: "#123456"
            }
        };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```

## Custom Ribbon items

The [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property can be set to `Template` to customize ribbon items with non-built-in items. It can be used to define the custom template for the ribbon item, which has the flexibility to create unique and personalized content.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/splitbutton-target/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/splitbutton-target" %}

## Display Mode

### Display Options 

By setting the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property you can determines how an item is displayed in different ribbon layouts.

`Auto` - The item is displayed in the classic layout group, simplified layout group, and overflow popup based on the ribbon's overflow state.
`Classic` - The item is displayed only in the classic layout group.
`Overflow` - The item is displayed only in the overflow popup.
`Simplified` - The item is displayed only in the simplified layout group.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/displayOptions/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/displayOptions" %}

## Enable or disable items

The [disabled](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#disabled) property can be used to disable an item. The item will be disabled and prevents the user interaction when set to `true`. By default the value is `false`.

```html
  <template>
  <ejs-ribbon>
      <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
          <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
              <e-ribbon-collections>
              <e-ribbon-collection>
                  <e-ribbon-items>
                  <e-ribbon-item type="Button" :disabled="true" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  </e-ribbon-items>
              </e-ribbon-collection>
              </e-ribbon-collections>
          </e-ribbon-group>
          </e-ribbon-groups>
      </e-ribbon-tab>
      </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
        return {
            cutButton:  { iconCss: "e-icons e-cut", content: "Cut" }
        };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>

```