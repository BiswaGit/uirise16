/**
 * Created by Ashish on 9/20/2016.
 */


function updatedata(data) {

    window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.scanQRCodeForATM(data);})
   // zone.run(() => { ATMWithdrawComponent.scanQRCode(data); });


   document.getElementById("qrcode").value = data;
	console.log(data);
    };


function updatepaydata(data) {

    window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.scanQRCodeorPay(data);})
    // zone.run(() => { ATMWithdrawComponent.scanQRCode(data); });


    document.getElementById("qrcode").value = data;
    console.log(data);
};