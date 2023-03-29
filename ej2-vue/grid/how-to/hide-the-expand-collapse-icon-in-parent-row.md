---
layout: post
title: Hide the expand collapse icon in parent row in Vue Grid component | Syncfusion
description: Learn here all about Hide the expand collapse icon in parent row in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Hide the expand collapse icon in parent row 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hide the expand collapse icon in parent row in Vue Grid component

By default, the expand/collapse icon will be visible even if the child grid is empty.

You can use [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event to hide the icon when there are no records in child grid.

To hide the expand/collapse icon in parent row when no records in child grid, follow the given steps:

**Step 1**: Create CSS class with custom style to override the default style of Grid.

```
    .e-row[aria-selected="true"] .e-customizedExpandcell {
        background-color: #e0e0e0;
    }

    .e-grid.e-gridhover tr[role='row']:hover {
        background-color: #eee;
    }

```

**Step 2**: Add the CSS class to the Grid in the [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event handler of Grid.

```ts
    rowDataBound(args){
      let filter:string = args.data.EmployeeID;
      let childrecord: any = new DataManager(this.$refs.Grid.childGrid.dataSource).executeLocal(new Query().where("EmployeeID", "equal", parseInt(filter), true));
      if(childrecord.length == 0) {
        //here hide which parent row has no child records
        args.row.querySelector('td').innerHTML=" ";
        args.row.querySelector('td').className = "e-customizedExpandcell";
      }
    }

```

In the below demo, the expand/collapse icon in the row with `EmployeeID` as `1` is hidden as it does not have record in child Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs46/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs46" %}
