
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
 }