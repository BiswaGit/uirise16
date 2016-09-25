
 
function sendOTP(){
	 
	 
	 $.ajax({
        type: "GET",
        async: "false",
        dataType:'text',
        url: 'http://f65bc691.ngrok.io/saralpay/send-otp',
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