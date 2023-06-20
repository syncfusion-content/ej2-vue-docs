<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
      <e-ribbon-tab header="Insert">
        <e-ribbon-groups>
          <e-ribbon-group header="Tables">
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
  
  .ribbonTemplate {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .ribbonTemplate.Large {
    flex-direction: column;
  }

  .ribbonTemplate.Large .e-icons {
    font-size: 35px;
  }

  .ribbonTemplate.Medium .e-icons,
  .ribbonTemplate.Small .e-icons{
    font-size: 20px;
    margin: 15px 5px;
  }

  .ribbonTemplate.Small .text {
    display:none;
  }

  .font-group .e-ribbon-group-content {
    justify-content: center;
  }

</style>