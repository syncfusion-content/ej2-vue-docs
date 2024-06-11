---
layout: post
title: Data binding in Vue Treegrid component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Treegrid component

The TreeGrid uses `DataManager`, which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#dataSource) property can be assigned either with the instance of `DataManager` or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

To learn about tree grid data binding quickly, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=EuDWGuP9d5E" %}

## Binding with ajax

You can use TreeGrid [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#datasource) property to bind the data source to TreeGrid from external Fetch request. In the below code we have fetched the data source from the server with the help of Fetch request and provided that to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#datasource) property by using `onSuccess` event of the Fetch.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/data-binding/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/data-binding/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding/default-cs1" %}

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Handling expandStateMapping

To denotes the expand status of parent row, define the [`expandStateMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#expandstatemapping) property of tree grid. The `expandStateMapping` property maps the field name in data source, that denotes whether parent record is in expanded or collapsed state and this is useful to renders parent row in expanded or collapsed state based on this mapping property value in data source.

```
<template>
<div id="app">
        <ejs-treegrid :dataSource='data' idMapping='TaskID' parentIdMapping='ParentValue' hasChildMapping='isParent' :treeColumnIndex='1' expandStateMapping='IsExpanded' height='400px'>
        <e-columns>
        <e-column field='TaskID'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='TaskName' headerText='Task Name' width=180></e-column>
        <e-column field='Duration' headerText='Duration' width=80></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>

import { TreeGridComponent, Page } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';




export default {
  data() {
    return {
      data: new DataManager({
        url: "Home/DataSource",
        adaptor: new UrlAdaptor
      })
    };
  },
}

</script>

```

The following code example defines `expandStateMapping` property at server end.

```ts

public ActionResult ExpandStateMapping()
{
  return View();
}
public class TreeData
{
    public static List<TreeData> tree = new List<TreeData>();
    [System.ComponentModel.DataAnnotations.Key]
    public int TaskID { get; set; }
    public string TaskName { get; set; }
    public int Duration { get; set; }
    public int? ParentValue { get; set; }
    public bool? isParent { get; set; }
    public bool IsExpanded { get; set; }
    public TreeData() { }
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            int root = 0;
            for (var t = 1; t <= 500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = false, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = false, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 500; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), isParent = false, IsExpanded = false, ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}
```