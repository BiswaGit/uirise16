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

    var tempdata= JSON.parse(data);
    window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.scanQRCodeorPay(tempdata.username,tempdata.accountname);})
    // zone.run(() => { ATMWithdrawComponent.scanQRCode(data); });


    document.getElementById("qrcode").value = data;
    console.log(data);
};

function updatenfcdata(name,card,amount) {

    
    
    
   $('#_id').addClass("show");
     $('#_id').text(name+" diposited $"+amount+" from card number "+card +" to your account successfully!!! ");
};