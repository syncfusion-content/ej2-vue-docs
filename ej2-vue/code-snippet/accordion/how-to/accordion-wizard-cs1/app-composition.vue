<template>
  <div id="app">
    <div id="Sign_In_Form" style="display: none; padding: 3px 0">
      <form id="formId">
        <div class="form-group">
          <div class="e-float-input">
            <input type="text" id="email" name="Email" required="" />
            <span class="e-float-line"></span>
            <label class="e-float-text" for="email">Email</label>
          </div>
          <div class="e-float-input">
            <input id="password" type="password" name="Password" required="" />
            <span class="e-float-line"></span>
            <label class="e-float-text" for="password">Password</label>
          </div>
        </div>
      </form>
      <div style="text-align: center">
        <button class="e-btn" id="Continue_Btn">Continue</button>
        <div id="err1">* Please fill all fields</div>
      </div>
    </div>
    <div id="Address_Fill" style="display: none; padding: 3px 0">
      <form id="formId_Address">
        <div class="form-group">
          <div class="e-float-input">
            <input type="text" id="name" name="Name" required="" />
            <span class="e-float-line"></span>
            <label class="e-float-text" for="name">Name</label>
          </div>
        </div>
        <div class="form-group">
          <div class="e-float-input">
            <input type="text" id="address" name="Address" required="" />
            <span class="e-float-line"></span>
            <label class="e-float-text" for="address">Address</label>
          </div>
        </div>
        <div class="form-group">
          <ejs-numerictextbox id="mobile" format="0" placeholder="Mobile" floatLabelType="Auto" showSpinButton="false">
          </ejs-numerictextbox>
        </div>
      </form>
      <div style="text-align: center">
        <button class="e-btn" id="Continue_BtnAdr">Continue</button>
        <div id="err2">* Please fill all fields</div>
      </div>
    </div>
    <div id="Card_Fill" style="display: none; padding: 3px 0">
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
        <div class="form-group">
          <ejs-numerictextbox id="cardNo" format="0" placeholder="Card No" floatLabelType="Auto" showSpinButton="false">
          </ejs-numerictextbox>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
        <div class="form-group">
          <div class="e-float-input">
            <input type="text" id="cardHolder" name="cardHolder" required="" />
            <span class="e-float-line"></span>
            <label class="e-float-text" for="cardHolder">CardHolder Name</label>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
        <ejs-datepicker id="expiry" width="100%" format="MM/yyyy" placeholder="Expiry Date" floatLabelType="Auto">
        </ejs-datepicker>
      </div>
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
        <div class="form-group">
          <ejs-numerictextbox id="CVV" format="0" placeholder="CVV" floatLabelType="Auto" showSpinButton="false">
          </ejs-numerictextbox>
        </div>
      </div>
      <div style="text-align: center">
        <button class="e-btn" id="Back_Btn">Back</button>
        <button class="e-btn" id="Save_Btn">Save</button>
        <div id="err3">* Please fill all fields</div>
      </div>
    </div>
    <ejs-dialog ref="alertDlg" header="Alert" width="200" isModal="true" content="" visible="false" :target="dlgTarget"
      :buttons="dlgButtons" :created="dlgCreated"></ejs-dialog>
    <ejs-accordion ref="accordionInc" :expanding="expanding">
      <e-accordionitems>
        <e-accordionitem expanded="true" header="Sign In" content="#Sign_In_Form"></e-accordionitem>
        <e-accordionitem header="Delivery Address" content="#Address_Fill"></e-accordionitem>
        <e-accordionitem header="Card Details" content="#Card_Fill"></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
</template>
<script setup>

import { AccordionComponent as EjsAccordion, AccordionItemDirective as EAccordionitem, AccordionItemsDirective as EAccordionitems } from "@syncfusion/ej2-vue-navigations";
import { DialogComponent as EjsDialog } from "@syncfusion/ej2-vue-popups";
import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";
import { ref } from 'vue';

const alertDlg = ref(null);
const accordionInc = ref(null);
const dlgButtons = [
  {
    buttonModel: { content: "Ok", isPrimary: true },
    click: () => {
      alertDlg.value.ej2Instances.hide();
      var obj1 = accordionInc.value.ej2Instances;
      if (
        obj1.expandedIndices[0] === 2 &&
        alertDlg.value.ej2Instances.content ===
        "Your payment successfully processed"
      ) {
        obj1.enableItem(0, true);
        obj1.enableItem(1, false);
        obj1.enableItem(2, false);
        obj1.expandItem(true, 0);
      }
    },
  },
];
const dlgTarget = document.body;
const checkMail = (mail) => {
  //eslint-disable-next-line
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    alertDlg.value.ej2Instances.content = "Enter valid email address";
    alertDlg.value.ej2Instances.show();
    return false;
  }
};
const checkMobile = (mobile) => {
  if (mobile.match(/^\d{10}$/)) {
    return true;
  } else {
    alertDlg.value.ej2Instances.content =
      "Mobile number length should be 10";
    alertDlg.value.ej2Instances.show();
    return false;
  }
};
const checkCardNo = (cardNo) => {
  if (cardNo.match(/^\d{16}$/)) {
    return true;
  } else {
    alertDlg.value.ej2Instances.content =
      "Card number length should be 16";
    alertDlg.value.ej2Instances.show();
    return false;
  }
};
const checkCVV = (cvv) => {
  if (cvv.match(/^\d{3}$/)) {
    return true;
  } else {
    alertDlg.value.ej2Instances.content =
      "CVV number length should be 3";
    alertDlg.value.ej2Instances.show();
    return false;
  }
};
const dlgCreated = () => {
  alertDlg.value.ej2Instances.hide();
};
const expanding = (e) => {
  if (
    e.name === "expanding" &&
    [].indexOf.call(accordionInc.value.ej2Instances.items, e.item) ===
    0
  ) {
    document.getElementById("Continue_Btn").onclick = () => {
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      if (email.value !== "" && password.value !== "") {
        if (checkMail(email.value)) {
          email.value = password.value = "";
          var acrdnObj = accordionInc.value.ej2Instances;
          acrdnObj.enableItem(1, true);
          acrdnObj.enableItem(0, false);
          acrdnObj.expandItem(true, 1);
        }
        document.getElementById("err1").classList.remove("show");
      } else {
        document.getElementById("err1").classList.add("show");
      }
    };
  } else if (
    e.name === "expanding" &&
    [].indexOf.call(accordionInc.value.ej2Instances.items, e.item) ===
    1
  ) {
    document.getElementById("Continue_BtnAdr").onclick = () => {
      var name = document.getElementById("name");
      var address = document.getElementById("address");
      var mobile = document.getElementById("mobile");
      if (
        name.value !== "" &&
        address.value !== "" &&
        mobile.value !== ""
      ) {
        if (checkMobile(mobile.value)) {
          var acrdnObj = accordionInc.value.ej2Instances;
          acrdnObj.enableItem(2, true);
          acrdnObj.enableItem(1, false);
          acrdnObj.expandItem(true, 2);
        }
        document.getElementById("err2").classList.remove("show");
      } else {
        document.getElementById("err2").classList.add("show");
      }
    };
  } else if (
    e.name === "expanding" &&
    [].indexOf.call(accordionInc.value.ej2Instances.items, e.item) ===
    2
  ) {
    document.getElementById("Back_Btn").onclick = () => {
      var acrdnObj = accordionInc.value.ej2Instances;
      acrdnObj.enableItem(1, true);
      acrdnObj.enableItem(2, false);
      acrdnObj.expandItem(true, 1);
    };
    document.getElementById("Save_Btn").onclick = () => {
      var cardHolder = document.getElementById("cardHolder");
      var expiry = document.getElementById("expiry");
      var cardNo = document.getElementById("cardNo");
      var cvv = document.getElementById("CVV");
      if (
        cardNo.value !== "" &&
        cardHolder.value !== "" &&
        expiry.value !== "" &&
        cvv.value !== ""
      ) {
        if (checkCardNo(cardNo.value)) {
          if (checkCVV(cvv.value)) {
            alertDlg.value.ej2Instances.content =
              "Your payment successfully processed";
            alertDlg.value.ej2Instances.show();
          }
        }
        document.getElementById("err3").classList.remove("show");
      } else {
        document.getElementById("err3").classList.add("show");
      }
    };
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

#err1,
#err2,
#err3 {
  display: none;
  color: red;
  margin-top: 10px;
  font-weight: 500;
}

#err1.show,
#err2.show,
#err3.show {
  display: block;
}

.e-dialog {
  max-height: 300px !important;
  /* csslint allow: important */
}

.template_title {
  text-align: center;
  padding: 10px 0;
  margin: 20px 0;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 16px;
}
</style>