/**
 * Created by Ashish on 9/20/2016.
 */


function updatedata(data) {

    window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.scanQRCode(data);})
   // zone.run(() => { ATMWithdrawComponent.scanQRCode(data); });


   document.getElementById("qrcode").value = data;
	console.log(data);
    };
