
 
function sendOTP(){
	 
	 
	 $.ajax({
        type: "GET",
        async: "false",
        dataType:'text',
        url: 'http://52.193.0.37:8080/saralpay/send-otp',
        success: function(data) {
        	console.log('html' + data);
        	 
        	  $('#recievedOTP').addClass("show");
        	


        },
        error:function(data) {
        	console.log('html' + data);
       	 
      	  $('#recievedOTP').addClass("show");
      	


      }
    });
     
     
     
  
     
     
 }


function verify(){
	 $('#verifiedOTP').addClass("show");
   	
}
function nfcPay(){
    
	window.location='Navigation://PayNFCScreen?userid='+ document.getElementById('userName').value+'&cardNum='+document.getElementById('cardNumber').value+'&amount='+document.getElementById('amount').value;
   	
}


