<template>
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip leadingIconCss="trendingIcon" 
            template='<a href="https://timesofindia.indiatimes.com/news" target="_blank" class="anchorElement">#BreakingNews</a><span class="textElement">125k posts</span>'></e-chip>
            <e-chip leadingIconCss="cameraIcon" 
            template='<a href="https://blog.google/products/photos/" target="_blank" class="anchorElement">#PhotoOfTheDay</a>'></e-chip>
            <e-chip leadingIconCss="trendingIcon"
            template='<a href="https://indianexpress.com/section/technology/" target="_blank" class="anchorElement">#TechNews</a><span class="textElement">107k posts</span>'></e-chip>
        </e-chips>
    </ejs-chiplist>
</template>

<script setup>
import { ChipListComponent as EjsChiplist, ChipsDirective as EChips, ChipDirective as EChip } from '@syncfusion/ej2-vue-buttons';
</script>

<style>
#chip .e-chip .trendingIcon {
	margin: 4px 0 4px 6px;
	width: 16px;
	height: 16px;
	background-image: url('data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHdpZHRoPSI0OCI+PHBhdGggZD0ibTMyIDEyIDQuNTkgNC41OS05Ljc2IDkuNzUtOC04TDQgMzMuMTcgNi44MyAzNmwxMi0xMiA4IDggMTIuNTgtMTIuNTlMNDQgMjRWMTJ6Ii8+PHBhdGggZD0iTTAgMGg0OHY0OEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==');
  }
  
  #chip .e-chip .cameraIcon {
	margin: 4px 0 4px 6px;
	width: 16px;
	height: 16px;
	background-image: url('data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LDYuNUgxNy43MmwtLjMyLTFhMywzLDAsMCwwLTIuODQtMkg5LjQ0QTMsMywwLDAsMCw2LjYsNS41NWwtLjMyLDFINWEzLDMsMCwwLDAtMywzdjhhMywzLDAsMCwwLDMsM0gxOWEzLDMsMCwwLDAsMy0zdi04QTMsMywwLDAsMCwxOSw2LjVabTEsMTFhMSwxLDAsMCwxLTEsMUg1YTEsMSwwLDAsMS0xLTF2LThhMSwxLDAsMCwxLDEtMUg3YTEsMSwwLDAsMCwxLS42OGwuNTQtMS42NGExLDEsMCwwLDEsLjk1LS42OGg1LjEyYTEsMSwwLDAsMSwuOTUuNjhsLjU0LDEuNjRBMSwxLDAsMCwwLDE3LDguNWgyYTEsMSwwLDAsMSwxLDFabS04LTlhNCw0LDAsMSwwLDQsNEE0LDQsMCwwLDAsMTIsOC41Wm0wLDZhMiwyLDAsMSwxLDItMkEyLDIsMCwwLDEsMTIsMTQuNVoiLz48L3N2Zz4=');
  }
  
  #chip .e-chip .anchorElement {
	margin: 0 4px;
	font-weight: 600;
	height: 16px;
	line-height: 16px;
	font-size: 12px;
	color: #0f6cbd;
	text-decoration: none;
  }
  
  #chip .e-chip .textElement {
	font-weight: 400;
	height: 14px;
	line-height: 14px;
	font-size: 10px;
	margin-right: 6px;
  }
</style>