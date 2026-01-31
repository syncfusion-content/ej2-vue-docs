---
layout: post
title: Ribbon Items in Vue Ribbon Component | Syncfusion
description: Check out and learn about Items in Syncfusion Vue Ribbon Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Items in Vue Ribbon component

The Ribbon component renders various built-in items based on the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemType/) property of a ribbon-item. By default, this property is set to `Button`, which renders a standard Button item.

## Built-in Items

Render the built-in Ribbon items using the `<e-ribbon-item>` tag. Specify the desired item by setting its [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property.

The following table describes the available built-in items and their functions:

| Built-in Ribbon Item | Action |
|----------------------|---------|
| Button | Renders a clickable button. |
| CheckBox | Renders a checkbox for binary selection. |
| DropDown | Renders a dropdown button with a popup list. |
| SplitButton | Renders a button with a primary action and a secondary dropdown list. |
| ComboBox | Renders a combo box for selection from a list of options. |
| ColorPicker | Renders a color picker for color selection. |
| GroupButton | Renders a group of related buttons. |

### Button items

To render a `Button` item, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `Button`. You can customize its appearance and behavior using the [RibbonButtonSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettingsModel/), which includes options like `iconCss`, `content`, and `isToggle`.

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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
  data: function () {
    return {
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut", isToggle: true },
    };
  }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### CheckBox Items

To render a `CheckBox`, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox`. Customize it using the [RibbonCheckBoxSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettingsModel/), which provides options for `label`, `labelPosition`, and `checked` state.

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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### DropDown button items

To render a `DropDownButton`, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `DropDown`. Customize it using the [RibbonDropDownSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettingsModel/), which includes `items`, `iconCss`, `content`, and a `target` for the popup content.

#### Target

The [target](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettingsModel/#target) property specifies the element selector for the content to be displayed in the DropDownButton popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/dropdown-target/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/dropdown-target/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/dropdown-target" %}

#### Customize Dropdown button item

Apply a custom CSS class to style dropdown items using the [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event.

The following sample showcases how to customize a specific dropdown item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/dropDownCustomItem/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/dropDownCustomItem/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/dropDownCustomItem" %}

#### Create dropdown popup on demand

Set the [createPopupOnClick](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#createpopuponclick) property to `true` to create the popup only when the dropdown is opened, optimizing performance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/dropdownPopup/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/dropdownPopup/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/dropdownPopup" %}

### Split button items

To render a `SplitButton`, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton`. Customize it with the [RibbonSplitButtonSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettingsModel/), which provides options like `iconCss`, `items`, and `target`.

#### Target

The [target](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettingsModel/#target) property specifies the element selector to be displayed in the SplitButton popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/splitbutton-target/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/splitbutton-target/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/splitbutton-target" %}

### ComboBox Items

To render a `ComboBox` item, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox`. You can configure it using the [RibbonComboBoxSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettingsModel/), which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
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

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/combobox/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/combobox/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/combobox" %}

### Colorpicker items

To render a `ColorPicker`, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker`. Customize it using the [RibbonColorPickerSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettingsModel/), which includes properties like `value`, `columns`, and `showButtons`.

#### Value

You can use the [value](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property to specify the color value. The value should be specified as Hex code.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/colorpicker/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/colorpicker/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/colorpicker" %}

### GroupButton Items

To render a `GroupButton`, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `GroupButton`. Configure its items and selection behavior using the [RibbonGroupButtonSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonSettingsModel/).

#### Items

You can render the groupbutton items by using the `<e-ribbon-item>` tag directive. You can also customize the groupbutton items through [RibbonGroupButtonItemModel](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/), which provides options such as `content`, `iconCss`, `selected` and more.

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

<script setup>
  
  import { RibbonItemSize, RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        size: RibbonItemSize.Small,
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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

#### Icon only

You can use the [iconCss](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#iconcss) property to customize the groupbutton icon. If the `iconCss` property is not defined, the groupbutton will not be rendered.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupButtonIcon/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupButtonIcon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupButtonIcon" %}

#### Selection

You can use the [selected](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#selected) property to select the groupbutton item initally. When set to `true`, the button will be selected. By default the `selected` property is false.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupButtonSelected/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/groupButtonSelected/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/groupButtonSelected" %}

#### Single selection

You can set the [selection](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonSelection/) property value as `RibbonGroupButtonSelection.Single` to make one selection at a time. It automatically deselects the previous choice when a different item is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/singleSelection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/singleSelection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/singleSelection" %}

#### Multiple selection

You can set the [selection](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonSelection/) property value as `RibbonGroupButtonSelection.Multiple` to select more than one button at a time. Users can select a button one by one to select multiple buttons.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/multipleSelection/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/multipleSelection/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/multipleSelection" %}


#### Groupbutton in simplified mode layout

In simplified mode, the groupbutton will be rendered as a dropdownbutton. The dropdownbutton icon will be updated based on the button item selected. The initial button icon will be the set, if none of the buttons are selected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/simplifiedModeGroupButton/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/simplifiedModeGroupButton/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/simplifiedModeGroupButton" %}

## Custom items

To create custom Ribbon items, set the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#type) property to `Template`. This allows you to render any HTML content or non-built-in components, offering maximum flexibility.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/customItems/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/customItems/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/customItems" %}

## Item Display Options

Use the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property to control in which Ribbon layouts an item appears.

| Option | Description |
|------------|----------------------------------------------------------------------|
| `Auto` | (Default) The item is displayed in all layouts. |
| `Classic` | The item is displayed only in the classic layout. |
| `Simplified` | The item is displayed only in the simplified layout. |
| `Overflow` | The item is displayed only in the overflow popup. |

### Display items in Classic only

To display the items only in the classic layout group, set the mode as `DisplayMode.Classic` in the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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

<script setup>
  
  import { RibbonComponent,DisplayMode } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### Display items in Simplified only

To display the items only in the simplified layout group, set the mode as `DisplayMode.Simplified` in the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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

<script setup>
  
  import { RibbonComponent,DisplayMode } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### Display items in Overflow popup only

To display the items only in the overflow, set the mode as `DisplayMode.Overflow` in the [displayOptions](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#displayoptions) property.

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

<script setup>
  
  import { RibbonComponent,DisplayMode } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## Enable or Disable Items

Use the [disabled](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#disabled) property to enable or disable a Ribbon item. When set to `true`, the item becomes non-interactive.

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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```