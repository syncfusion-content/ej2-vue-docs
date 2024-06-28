<template>
  <div class="result"> </div>
</template>
<script>
import { Internationalization } from '@syncfusion/ej2-base';
export default {
  mounted: function () {
    var intl = new Internationalization();
    var dParser = intl.getDateParser({ skeleton: 'full', type: 'dateTime' });
    var val = dParser('Friday, November 4, 2016 at 1:03:04 PM GMT+05:30');
    document.querySelector('.result').innerHTML = val.toString();
  }
}
</script>
<style></style>