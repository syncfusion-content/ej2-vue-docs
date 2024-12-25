---
layout: post
title: Manipulate as grid layout in Vue Listview component | Syncfusion
description: Learn here all about Manipulate listview as grid layout in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Manipulate listview as grid layout 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Manipulate listview as grid layout in Vue Listview component

In ListView, list items can be rendered in grid layout with the following data manipulations.

* Add Item

* Remove Item

* Sort Items

* Filter Items

## Grid Layout

In this section, we will discuss about rendering of list items in grid layout.

* Initialize and render ListView with a dataSource that will render list items in list layout.

* Now, add the below CSS to list item. This will make list items to render in grid layout

   ```
   #element .e-list-item {
        height: 100px;
        width: 100px;
        float: left; 
     }  
   ```

In the below sample, we have rendered List items in grid layout.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/grid-layout-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/grid-layout-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/grid-layout-cs1" %}

### Data manipulation

In this section, we will discuss about ListView data manipulations.

#### Add Item

We can add list item using [`addItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#additem) API. This will accept an array of data as an argument.

   ```ts
    this.$refs.listViewInstance.addItem([{text: 'Apricot', id: '32'}]);
   ```

In the below sample, you can add new fruit item by clicking add button which will open dialog box with fruit name and image URL text box. After entering the item details, click the add button. This will add your new fruit item.

#### Remove item

We can remove list item using [`removeItem`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#removeitem) API. This will accept fields with `id` or list item element as argument.

   ```ts
    this.$refs.listViewInstance.removeItem({id: '32'});
   ```

In the below sample, you can remove fruit by hovering the fruit item which will show delete button and click that delete button to delete that fruit from your list.

#### Sort Items

ListView can be sorted either in Ascending or Descending order. To enable sorting in your ListView, set [`sortOrder`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#sortorder) as `Ascending` or `Descending`.

   ```ts
    <ejs-listview sortOrder='Ascending'></ejs-listview>
   ```
We can also set sorting after component initialization.

   ```ts
    this.$refs.listViewInstance.sortOrder = 'Ascending'
   ```

In the below sample, we have sorted fruits in `Ascending` order. To sort it in descending, click on sort order icon and vice versa.

#### Filter Items

ListView data can be filtered with the help of [`dataManager`](https://ej2.syncfusion.com/vue/documentation/data/getting-started/). After filtering the data, update ListView [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#datasource) with filtered data.

   ```ts
   let value = this.$refs.textboxEle.value;  //input text box value
   let filteredData = new DataManager(this.listdata).executeLocal(
        new Query().where("text", "startswith", value, true)
   );
   listViewInstance.dataSource = filteredData;
  ```

In the below sample, we can filter fruit items with the help of search text box. This will filter fruit items based on your input in the search text box. Here we used [`startswith`](https://ej2.syncfusion.com/documentation/data/querying#filter-operators) of input text to filter data in DataManager.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/grid-layout-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/grid-layout-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/grid-layout-cs2" %}