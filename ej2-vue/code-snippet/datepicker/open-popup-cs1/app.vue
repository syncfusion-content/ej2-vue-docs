<template>
    <div id="app">
        <div class='wrap'>
            <ejs-datepicker ref="dateObj" id='date' placeholder="Choose a date" :focus='onFocus'></ejs-datepicker>
        </div>
    </div>
</template>
<script>

import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";

export default {
    name: "App",
    components: {
        "ejs-datepicker": DatePickerComponent
    },
    methods: {
        onFocus: function () {
            this.$refs.dateObj.show();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/datepicker/index.css";

.wrap {
    margin: 35px auto;
    width: 240px;
}
</style>