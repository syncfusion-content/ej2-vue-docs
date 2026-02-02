---
layout: post
title: Virtual scrolling in Vue Schedule component | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Virtual scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in Vue Schedule component

To achieve better performance in the Scheduler when loading a large number of resources and events, we have added virtual scrolling support load a large set of resources and events instantly as you scroll. You can dynamically load large number of resources and events in the Scheduler by setting `true` to the [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/viewsModel#allowvirtualscrolling) property within the view specific settings. The virtual loading of events is possible in Agenda view, by setting [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/viewsModel#allowvirtualscrolling) property to `true` within the agenda view specific settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/virtual-scrolling-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/virtual-scrolling-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/virtual-scrolling-cs2" %}

> For now, the virtual loading of resources and events is not supported in `MonthAgenda`, `Year` and `TimelineYear` (Horizontal Orientation) views.

## Enabling lazy loading for appointments

**Lazy loading** complements virtual scrolling by fetching appointment data from the server **on demand**, instead of loading all events upfront.

### How lazy loading works

When lazy loading is enabled:

- Initially, events are fetched only for the visible resources and current date range.
- As the user scrolls, the Scheduler issues additional server requests.
- Each request includes:
  - The resource IDs currently in view
  - The active date range
- The server returns only the events relevant to those resources and dates.

This ensures optimal network usage and faster initial load times.

---

## Enabling lazy loading

To enable lazy loading, set the [`enableLazyLoading`](https://ej2.syncfusion.com/vue/documentation/api/schedule/viewsModel#enablelazyloading) property to `true` in the view configuration.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/lazy-loading-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/lazy-loading-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/lazy-loading-cs1" %}

Here's the server-side controller code that retrieves appointment data based on the resource IDs provided as query parameters:

```c#
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.OData.Query;

namespace LazyLoadingServices.Controllers
{
    public class VirtualEventDataController : Controller
    {
        private readonly EventsContext dbContext;

        [HttpGet]
        [EnableQuery]
        [Route("api/VirtualEventData")]
        public IActionResult GetData([FromQuery] Params param)
        {
            IQueryable<EventData> query = dbContext.Events;
            // Filter the appointment data based on the ResourceId query params.
            if (!string.IsNullOrEmpty(param.ResourceId))
            {
                string[] resourceId = param.ResourceId.Split(',');
                query = query.Where(data => resourceId.Contains(data.ResourceId.ToString()));
            }
            return Ok(query.ToList());
        }
    }
    public class Params
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string ResourceId { get; set; }
    }
}
```

**Note:** 
* The property will be effective, when large number of resources and appointments bound to the Scheduler.
* This property is applicable only when [resource grouping](https://ej2.syncfusion.com/vue/documentation/api/schedule/group#resources) is enabled in Scheduler.

## See Also

* [Virtual scrolling in Agenda view](./views#agenda-view)

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.
