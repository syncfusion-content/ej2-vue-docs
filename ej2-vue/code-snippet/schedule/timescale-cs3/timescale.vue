<template>
    <div>{{minorSlotTemplate(data.date)}}</div>
</template>

<script lang='ts'>
    import { Internationalization } from '@syncfusion/ej2-base';

    let instance: Internationalization = new Internationalization();

    export default {
        data() {
            return {
                data: {}
            }
        },
        methods: {
            minorSlotTemplate: function (date: Date) {
                return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
            }
        },
    }

</script>
