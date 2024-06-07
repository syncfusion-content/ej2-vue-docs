---
layout: post
title: Switching older themes style in Vue Pivotview component | Syncfusion
description: Learn here all about Switching older themes style in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Switching older themes style 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Switching older themes style in Vue Pivotview component

From Volume 1, 2020 onwards Syncfusion has revised the theming and layout of the Pivot Table. So, to inherit the older theme style and layout please do the necessary changes in CSS and pivot table height.

## CSS Selectors

In current theme, the cells can be differentiated by their background colors. To avoid it, you need to override its background colors via simple CSS coding within your application. The below CSS selectors allow to achieve the same for material, fabric, bootstrap and bootstrap v4 themes.

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>       
       <!-- Codes here... -->
            <style>
                .e-pivotview .e-rowsheader, 
                .e-pivotview .e-columnsheader,
                .e-pivotview .e-gtot,
                .e-pivotview .e-content,
                .e-pivotview .e-gridheader,
                .e-pivotview .e-headercell {
                    background-color:#fff !important;
                }
            </style>
       </head>
       <body>
       </body>
  </html>

```

Meanwhile for high contrast theme, we need to set the following CSS.

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>       
       <!-- Codes here... -->
            <style>
                .e-pivotview .e-rowsheader, 
                .e-pivotview .e-columnsheader,
                .e-pivotview .e-gtot,
                .e-pivotview .e-content,
                .e-pivotview .e-gridheader,
                .e-pivotview .e-headercell {
                    background-color:#000 !important;
                }
            </style>
       </head>
       <body>
       </body>
  </html>

```

## Adjusting Row Height

In current theme, to make the component compact we have reduced the height of each pivot table rows. But user can reset the height of the pivot table using the [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) property in [`gridSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings). In older theme, the property was set to 36 pixels for desktop layout and 48 pixels for mobile layout. So reset the [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#gridsettings) accordingly to visualize the older theme style.

In the below code sample, we replicate the older theme style.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs244/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs244/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs244" %}