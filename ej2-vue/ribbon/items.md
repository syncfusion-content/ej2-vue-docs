---
layout: post
title: Ribbon Items in Vue Ribbon Component | Syncfusion
description: Check out and learn about Items in Syncfusion Vue Ribbon Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Items

Ribbon renders various built-in items based on the item [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemType/) property. By default, the type property is set as `Button` which renders the Button.

## Built-in items

You can render the built-in Ribbon items by using the `<e-ribbon-item>` tag directive, to specify the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property.

The following table explains the built-in items and their actions.

| Built-in Ribbon Items | Actions |
|------------------------|---------|
| Button | Renders button as ribbon item.|
| CheckBox | Renders checkbox as ribbon item.|
| DropDown | Renders dropdownbutton as ribbon item.|
| SplitButton | Renders splitbutton as ribbon item.|
| ComboBox | Renders combobox as ribbon item.|
| ColorPicker | Renders color picker as ribbon item.|
| GroupButton | Renders groupbutton as ribbon item.|

### Button items

You can render the built-in button Ribbon item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property as `Button`. You can also customize the button item using the [RibbonButtonSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettingsModel/), which provides options such as `iconCss`, `content`, `isToggle` and more.

#### Toggle button

The [isToggle](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettingsModel/#istoggle) property can be used to define whether the button act as a toggle button or not. By default, the value is `false`.

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

### Checkbox items

You can render the built-in checkBox Ribbon item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox`. You can also customize the checkBox item using the [RibbonCheckBoxSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/), which provides options such as `labelPosition`, `label`, `checked` and more.

#### Checkbox state

You can use the [checked](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#checked) property to handle the checked or unchecked state. By default, the value is `false`.

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

#### Defining label

You can use the [label](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property to add a caption for the CheckBox. The label position can be set `Before` or `After`, by using the [labelPosition](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property. By default, the labelPosition is `After`.

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

### DropDown button items

You can render the built-in dropDown Ribbon item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `DropDown`. You can also customize the dropDown item through [RibbonDropDownSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettingsModel/), which provides options such as `iconCss`, `content`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector to be displayed in the DropDownButton popup.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/dropdown-target/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/dropdown-target" %}

### Split button items

You can render the built-in splitButton Ribbon item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton`. You can also customize the splitButton item through [RibbonSplitButtonSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettingsModel/), which provides options such as `iconCss`, `items`, `target` and more.

#### Target

The [target](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property specifies the element selector to be displayed in the SplitButton popup.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/splitbutton-target/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/splitbutton-target" %}

### Combobox items

You can render the built-in comboBox Ribbon item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox`. You can also customize the comboBox item through [RibbonComboBoxSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/), which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

#### Filtering

You can use the [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property to filter the data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found the value of the `noRecordsTemplate` property will be displayed. By default, the value is `false`.

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

You can use the [index](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/#index) property to get or set the selected item in the combobox.

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

You can use the [sortOrder](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/#sortorder) property to specify the order in which the DataSource should be sorted.

<table>
  <tr>
    <td>`None`</td>
    <td>The data source is not sorted.</td>
  </tr>
  <tr>
    <td>`Ascending`</td>
    <td>The data source is sorted in ascending order.</td>
  </tr>
  <tr>
    <td>`Descending`</td>
    <td>The data source is sorted in descending order.</td>
  </tr>
</table>

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

### Colorpicker items

You can render the built-in colorPicker Ribbon item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker`. You can also customize the colorPicker item through [RibbonColorPickerSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettingsModel/), which provides options such as `value`, `columns`, `showButtons` and more.

#### Value

You can use the [value](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property to specify the color value. The value should be specified as Hex code.

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

### Groupbutton items

You can render the built-in groupbutton Ribbon item by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `GroupButton`. You can also customize the groupbutton item using the `RibbonGroupButtonSettingsModel`, which provides options such as `selection` and `items`.

#### Items

You can render the groupbutton items by using [items](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItem/) property. You can also customize the groupbutton items through [RibbonGroupButtonItemModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/), which provides options such as [content](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#content), [iconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#iconcss), [selected](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#selected) and more.

#### Item content

You can use the [content](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#content) property to define the text content for the groupbutton.

```html

<template>
    <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Paragraph">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="GroupButton" :allowedSizes="size" :groupButtonSettings="groupButtonItem"></e-ribbon-item>
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
  import { RibbonItemSize, RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
      return {
        size: RibbonItemSize.Medium,
          groupButtonItem: { 
          items: [
            {iconCss: 'e-icons e-align-left', content: 'Align Left'},
            {iconCss: 'e-icons e-align-center',content: 'Align Center'}, 
            {iconCss: 'e-icons e-align-right',content: 'Align Right'}, 
            {iconCss: 'e-icons e-justify',content: 'Justify'}
          ]
        },
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

#### Icon only

You can use the  [iconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#iconcss) property to customize the groupbutton icon. If the `iconCss` property is not defined, the groupbutton will not be rendered.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/groupButtonIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupButtonIcon" %}

#### Selection

You can use the [selected](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#selected) property to select the groupbutton item initally. When set to `true`, the button will be selected. By default the `selected` property is false.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/groupButtonSelected/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupButtonSelected" %}

#### Single selection

You can set the [selection](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonSelection/) property value as `RibbonGroupButtonSelection.Single` to make one selection at a time. It automatically deselects the previous choice when a different item is clicked.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/singleSelection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/singleSelection" %}

#### Multiple selection

You can set the [selection](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonSelection/) property value as `RibbonGroupButtonSelection.Multiple` to select more than one button at a time. Users can select a button one by one to select multiple buttons.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/multipleSelection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/multipleSelection" %}


#### Groupbutton in simplified mode layout

In simplified mode, the groupbutton will be rendered as a dropdownbutton. The dropdownbutton icon will be updated based on the button item selected. The initial button icon will be the set, if none of the buttons are selected.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/simplifiedModeGroupButton/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/simplifiedModeGroupButton" %}

## Custom items

You can customize the ribbon items with non-built-in items or HTML content by setting the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `Template`. This provides an option to customize the ribbon items with greater flexibility.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/customItems/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/customItems" %}

## Items display Mode

You can use the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property to display the items in the Ribbon layout. 

<table>
  <tr>
    <td>`Auto`</td>
    <td>The items are displayed in all layouts based on the ribbon's overflow state.</td>
  </tr>
  <tr>
    <td>`Classic`</td>
    <td>The items are displayed only in the classic layout group.</td>
  </tr>
  <tr>
    <td>`Simplified`</td>
    <td>The items are displayed only in the simplified layout group.</td>
  </tr>
  <tr>
    <td>`Overflow`</td>
    <td>The items are displayed only in the overflow popup.</td>
  </tr>
</table>

### Display items in Classic only

To diplay the items only in the classic layout group, set the mode as `DisplayMode.Classic` in the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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
                  <e-ribbon-item type="Button" :displayOptions="buttonDisplayMode" :buttonSettings="cutButton">
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
  import { RibbonPlugin,DisplayMode } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
    return {
      buttonDisplayMode: DisplayMode.Classic,
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
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

### Display items in Simplified only

To diplay the items only in the simplified layout group, set the mode as `DisplayMode.Simplified` in the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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
                  <e-ribbon-item type="Button" :displayOptions="buttonDisplayMode" :buttonSettings="cutButton">
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
  import { RibbonPlugin,DisplayMode } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
    return {
      buttonDisplayMode: DisplayMode.Simplified,
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
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

### Display items in Overflow popup only

To diplay the items only in the overflow, set the mode as `DisplayMode.Overflow` in the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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
                  <e-ribbon-item type="Button" :displayOptions="buttonDisplayMode" :buttonSettings="cutButton">
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
  import { RibbonPlugin,DisplayMode } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    data: function () {
    return {
      buttonDisplayMode: DisplayMode.Overflow,
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
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

## Enable or disable items

You can use the [disabled](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#disabled) property to disable a Ribbon item. It prevents the user interaction when set to `true`. By default, the value is `false`.

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
                    <e-ribbon-item type="Button" :disabled="true" :buttonSettings="cutButton"></e-ribbon-item>
                    <e-ribbon-item type="CheckBox" :disabled="true" :checkBoxSettings="rulerSettings"></e-ribbon-item>
                    <e-ribbon-item type="DropDown" :disabled="true" :dropDownSettings="tableSettings"></e-ribbon-item>
                    <e-ribbon-item type="SplitButton" :disabled="true" :splitButtonSettings="tableSettings"></e-ribbon-item>
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
            cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
            rulerSettings: { label: 'Ruler', checked: true },
            tableSettings: { content: 'Table', iconCss: 'e-icons e-table'}
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