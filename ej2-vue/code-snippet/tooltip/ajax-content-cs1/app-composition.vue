<template>
  <div class="control-section tooltip-ajax">
    <p class="list-header">National Sports</p>
    <ejs-tooltip
      ref="tooltip"
      style="display: block"
      class="e-prevent-select"
      :content="content"
      target="#countrylist [title]"
      position="RightCenter"
      cssClass="e-ajax-content"
      :beforeRender="onBeforeRender"
    >
      <ejs-listview
        id="countrylist"
        :dataSource="listViewData"
        :fields="fields"
      ></ejs-listview>
    </ejs-tooltip>
  </div>
</template>

<script setup>
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { Fetch } from '@syncfusion/ej2-base';

let content = "Loading..";

const onBeforeRender = (args) => {
  let fetchApi = new Fetch(
        'https://ej2.syncfusion.com/vue/demos/source/tooltip/tooltipdata.json',
        'GET'
      );
      fetchApi.onSuccess = (data) => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].Id === args.target.getAttribute('data-content')) {
            /* tslint:disable */
            this.content =
              "<div class='contentWrap'><span class=" +
              data[i].Class +
              "></span><div class='def'>" +
              data[i].Sports +
              '</div></div>';
            /* tslint:enable */
          }
        }
      };
      fetchApi.send();
  };
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#container {
  width: 350px;
  position: relative;
  left: 50%;
  transform: translateX(-25%);
}

.e-ajax-content .contentWrap {
  padding: 3px 0;
  line-height: 16px;
}

@font-face {
  font-family: 'sportsicons';
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)
    format('truetype');
  font-weight: normal;
  font-style: normal;
}

[class^='sports-icon-'],
[class*=' sports-icon-'] {
  font-family: 'sportsicons';
  speak: none;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  padding-right: 6px;
  vertical-align: middle;
}

.e-ajax-content .sports-icon-cricket:before {
  content: '\\e703';
}

.e-ajax-content .sports-icon-archery:before {
  content: '\\e705';
}

.e-ajax-content .sports-icon-table-tennis:before {
  content: '\\e702';
}

.e-ajax-content .sports-icon-baseball:before {
  content: '\\e706';
}

.e-ajax-content .sports-icon-hockey:before {
  content: '\\e701';
}

.e-ajax-content .sports-icon-shooting:before {
  content: '\\e700';
}

.e-ajax-content .def {
  float: right;
}

.tooltip-ajax #countrylist {
  border: 1px solid #dddddd;
  border-radius: 3px;
  max-width: 170px;
  margin: 0 auto;
  overflow: hidden;
}

.tooltip-ajax .list-header {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>