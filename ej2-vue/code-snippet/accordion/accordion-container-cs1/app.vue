

<template>
    <div id="app">
    <ejs-accordion>
          <div>
                <div>
                    <div> ASP.NET </div>
                </div>
                <div>
                    <div> Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications
                        and XML Web services </div>
                </div>
            </div>
            <div>
                <div>
                    <div> ASP.NET MVC </div>
                </div>
                <div>
                    <div> The Model-View-Controller (MVC) architectural pattern separates an application into three main components:
                        the model, the view, and the controller </div>
                </div>
            </div>
            <div>
                <div>
                    <div> JavaScript </div>
                </div>
                <div>
                    <div> JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part
                        of web browsers so that client-side scripts could interact with the user, control the browser </div>
                </div>
            </div>
    </ejs-accordion>
  </div>
</template>
<script>
import Vue from 'vue';
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';

Vue.use(AccordionPlugin);
export default {
  name: 'app',
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>


