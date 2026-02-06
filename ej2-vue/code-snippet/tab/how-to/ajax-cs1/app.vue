<template>
  <div id="wrapper" style='margin-top: 20px'>
    <div>
      <ejs-tab id="element" ref=element>
        <e-tabitems>
          <e-tabitem :header='headerText0' :content="content0"></e-tabitem>
          <e-tabitem :header='headerText1' :content="content1"></e-tabitem>
          <e-tabitem :header='headerText2'></e-tabitem>
        </e-tabitems>
      </ejs-tab>
    </div>
  </div>
</template>
<script>

import { TabComponent, TabItemDirective, TabItemsDirective, } from '@syncfusion/ej2-vue-navigations';
import { Ajax } from '@syncfusion/ej2-base';

export default {
  name: "App",
  components: {
    "ejs-tab": TabComponent,
    "e-tabitems": TabItemsDirective,
    "e-tabitem": TabItemDirective
  },
  data: function () {
    return {
      headerText0: { text: 'Facebook' },
      headerText1: { text: 'WhatsApp' },
      headerText2: { text: 'Twitter' },
      content0: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
        'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
        'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'s ' +
        'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
        'University. It gradually added support for students at various other universities and later to high-school students.',

      content1: 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates ' +
        'under a subscription business model. It uses the Internet to send text messages, images, video, user location and ' +
        'audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
        'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
        'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.'


    }
  }, mounted() {
    var ajax = new Ajax('./Ajax.html', 'GET', true);
    ajax.send().then();
    ajax.onSuccess = (data) => {
      var obj = this.$refs.element.ej2Instances;
      obj.items[2].content = data;
      obj.refresh();
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material3.css";
</style>