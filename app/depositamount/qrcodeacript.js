
 function showqrCode(){


     var jq = window.jQuery;
     var options = {
         render: 'div',
         ecLevel: 'H',
         minVersion: parseInt('6', 10),

         fill: '#333333',
         background: '#ffffff',
         // fill: jq('#img-buffer')[0],

         text: jq('#qrstring').val(),
         size: parseInt('250', 10),
         radius: parseInt('50', 10) * 0.01,
         quiet: parseInt('1', 10),

         mode: parseInt('0', 10),

         mSize: parseInt('11', 10) * 0.01,
         mPosX: parseInt('50', 10) * 0.01,
         mPosY: parseInt('50', 10) * 0.01,

         label: 'QR Code',
         fontname: 'Ubuntu',
         fontcolor: jq('#fontcolor').val(),

         image: jq('#img-buffer')[0]
     };

     jq('#qrcodeimg').empty().qrcode(options);
     
     console.log(jq('#qrstring').val());
     
     var test = JSON.parse(jq('#qrstring').val());
     
     
     doPoll( test.username,test.accountname);
     
    
 }
 
 
 function doPoll(destuserid, destaccountnumber){
	 
	 
	 
	 $.ajax({
        type: "GET",
        async: "false",
        dataType:'text',
        url: 'http://apirise16.azurewebsites.net/api/getqrcode?destuserid='+destuserid+'&destaccountnumber='+destaccountnumber,
        success: function(data) {
        	console.log('html' + data);
        	 var arr= JSON.parse(data);
           console.log('html1' + arr._id);
           $('#_id').text(arr._id);
           
           if(arr._id==''){
           
        	   setTimeout(doPoll,5000);
           }else{
        	   
        	   $.ajax({
        	        type: "GET",
        	        async: "false",
        	        //data: { get_param: 'value' }, 
        	        dataType:'text',
        	        url: 'http://apirise16.azurewebsites.net/api/deleteqrcode?destuserid='+destuserid+'&destaccountnumber='+destaccountnumber,
        	        success: function(data) {
        	        	console.log(data);
        	        }
        	        });
        	   
        	   $('#_id').addClass("show");
        	   
           }
        }
    });
     
     
     
  
     
     
 }