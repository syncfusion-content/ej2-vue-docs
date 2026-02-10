---
layout: post
title: Data binding in Vue Diagram component | Syncfusion®
description: Learn here all about Data binding in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Diagram component

* Diagram can be populated with the `nodes` and `connectors` based on the information provided from an external data source.

* Diagram exposes its specific data-related properties allowing you to specify the data source fields from where the node information has to be retrieved from.

* The [`dataManager`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#datamanager) property is used to define the data source either as a collection of objects or as an instance of `DataManager` that needs to be populated in the diagram.

* The [`ID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#id) property is used to define the unique field of each JSON data.

* The [`parentId`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#parentid) property is used to defines the parent field which builds the relationship between ID and parent field.

* The [`root`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#root) property is used to define the root node for the diagram populated from the data source.

* To explore those properties, see [`DataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel).

* Diagram supports two types of data binding. They are:

    1. Local data
    2. Remote data

## Local data

Diagram can be populated based on the user defined JSON data (Local Data) by mapping the relevant data source fields.

To map the user defined JSON data with diagram, configure the fields of [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel). The following code example illustrates how to bind local data with the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/data-binding/LocalBinding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/data-binding/LocalBinding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/data-binding/LocalBinding-cs1" %}

## Remote data

You can bind the diagram with remote data by using [`dataManager`].

It uses two different classes: `DataManager` for processing and `Query` for serving data. `DataManager` communicates with data source and `Query` generates data queries that are read by the [`dataManager`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel).

To learn more about data manager, refer to [`Data Manager`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel).

To bind remote data to the diagram,configure the fields of [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel). The following code illustrates how to bind remote data to the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/data-binding/RemoteBinding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/data-binding/RemoteBinding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/data-binding/RemoteBinding-cs1" %}

## CRUD

This feature allows you to read the data source and perform add or edit or delete the data in data source at runtime.

## Read DataSource

* This feature allows you to define the nodes and connectors collection in the data source and connectionDataSource respectively.

* You can set the data collection in the model’s dataSourceSettings [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#datasource) property. The nodes will be generated based on the data specified in the data source.

* You can set the connector collection in the model’s dataSourceSettings [`connectionDataSource`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#connectionDataSource) property.

* The dataSourceSettings connectionDataSource [`dataManager`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#dataManager) property is used to set the data source for the connection data source items.

* If you have a data (data will be set in the dataSource property) with parent relationship in the database and also defined the connector in the connectionDataSource simultaneously, then the connectors set in the connectionDataSource will be considered as a priority to render the connector.

* The dataSourceSettings [`crudAction’s`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#crudAction) [`read`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#read) property specifies the method, which is used to read the data source and its populate the nodes in the diagram.

* The connectionDataSource crudAction’s [`read`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#read) specifies the method, which is used to read the data source and its populates the connectors in the diagram.

* The dataSourceSettings’s [`id`](https://ej2.syncfusion.com/vue/documentation/api/diagram/datasourcemodel#id) and connectionDataSource’s [`id`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#id) properties are used to define the unique field of each JSON data.

* The connectionDataSource’s [`sourceID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#sourceID) and [`targetID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#targetID) properties are used to set the sourceID and targetID for connection data source item.

* The connectionDataSource’s [`sourcePointX`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#sourcePointX), [`sourcePointY`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#sourcePointY), [`targetPointX`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#targetpointx), and [`targetPointY`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectiondatasourcemodel#targetpointy) properties are used to define the sourcePoint and targetPoint values for connector from data source.

* The dataSourceSettings crudAction’s [`customFields`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#customFields) property is used to maintain the additional information for nodes.

* Similarly, connectionDataSource’s crudAction’s [`customFields`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#customFields) is used to maintain the additional information for connectors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/data-binding/connectionDataSource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/data-binding/connectionDataSource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/data-binding/connectionDataSource-cs1" %}

## How to perform Editing at runtime

* The dataSourceSettings crudAction object allows you to define the method, which is used to get the changes done in the data source defined for shapes from the client-side to the server-side.

* Similarly, the connectionDataSource crudAction object allows you to define the method, which is used to get the changes done in the data source defined for connectors from the client-side to the server-side.

## InsertData

* The dataSourceSettings crudAction’s [`create`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#create) property specifies the method, which is used to get the nodes added from the client-side to the server-side.

* The connectionDataSource crudAction’s  [`create`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#create) specifies the method, which is used to get the connectors added from the client-side to the server-side.

* The following code example illustrates how to send the newly added or inserted data from the client to server-side.

```javascript
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
            dataSourceSettings: {
            crudAction: {
              //Url which triggers the server side AddNodes method
              create: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddNodes',
           },
           connectionDataSource: {
             crudAction: {
                //Url which triggers the server side AddConnectors method
                create: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/AddConnectors',
             }
           }
         }
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        //Sends the inserted nodes/connectors from client side to the server side through the URL which is specified in server side.
        diagramInstance.insertData();
    }
}
```

## UpdateData

* The dataSourceSettings crudAction’s [`update`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#update) property specifies the method, which is used to get the modified nodes from the client-side to the server-side.

* The connectionDataSource crudAction’s [`update`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#update) specifies the method, which is used to get the modified connectors from the client-side to the server-side.

* The following code example illustrates how to send the updated data from the client to the server side.

```javascript
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
            dataSourceSettings: {
            crudAction: {
              //Url which triggers the server side UpdateNodes method
              update: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateNodes',
            },
           connectionDataSource: {
             crudAction: {
             //Url which triggers the server side UpdateConnectors method
              update: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/UpdateConnectors',
            }
           }
         }
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        //Sends the updated nodes/connectors from client side to the server side through the URL which is specified in server side.
        diagramInstance.updateData();
    }
}
```

## DeleteData

* The dataSourceSettings crudAction’s [`destroy`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#destroy) property specifies the method, which is used to get the deleted nodes from the client-side to the server-side.

* The connectionDataSource crudAction’s [`destroy`](https://ej2.syncfusion.com/vue/documentation/api/diagram/crudactionmodel#destroy) specifies the method, which is used to get the deleted connectors from the client-side to the server-side.

```javascript
export default {
    name: 'app'
    data() {
        return {
            width: "100%",
            height: "350px",
            connectors: connectors,
            dataSourceSettings: {
            crudAction: {
               //Url which triggers the server side DeleteNodes method
                destroy: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteNodes',
           },
           connectionDataSource: {
               crudAction: {
                //Url which triggers the server side DeleteConnectors method
                destroy: 'https://ej2services.syncfusion.com/development/web-services/api/Crud/DeleteConnectors',
                }
               }
            }
        }
    }
    mounted: function() {
        let diagramInstance: Diagram;
        let diagramObj: any = document.getElementById("diagram");
        diagramInstance = diagramObj.ej2_instances[0];
        //Sends the deleted nodes/connectors from client side to the server side through the URL which is specified in server side.
        diagramInstance.removeData();
    }
}
```

## See Also

* [How to arrange the diagram nodes and connectors using varies layout](./automatic-layout)