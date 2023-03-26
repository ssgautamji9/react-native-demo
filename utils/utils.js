import PaytmChecksum from 'paytmchecksum'
export const MID =  'NdzxLd48376996700250';
export const MKEY = 'Nz3ef7Xi5zH%hvQm';
export const getTxToken = (data) =>{

    return new Promise((resolve,reject)=>{
        var paytmParams = {};
        paytmParams.body = {
            "requestType" : "Payment",
            "mid" : MID,
            "websiteName" : "WEBSTAGING",
            "orderId" : data.orderId,
            "callbackUrl": "https://merchant.com/callback",
            "txnAmount" : {
                "value" : data.txAmount,
                "currency" : "INR",
                },
            "userInfo" : {
                "custId" : data.customerId,
            },
        //enable any other modes if you want
            "enablePaymentMode":[
                {"mode" : "UPI",channel: ["UPI","UPIPUSH"]}, {"mode":"DEBIT_CARD",channel:["RUPAY"]}
            ]
        };
        PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "L&qCdepjSHKzEX0l")
        .then(function(checksum){
            paytmParams.head = {
                "signature" : checksum
            };
            var post_data = JSON.stringify(paytmParams);
            var options = {
                // for Staging(development)
                hostname: 'securegw-stage.paytm.in',
                // for Production
                // hostname: 'securegw.paytm.in',
                port: 443,
                path: '/theia/api/v1/initiateTransaction?'+ 'mid='+MID+'&orderId='+data.orderId+'',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                },
                body:post_data
            };  
            fetch('https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid='+MID+'='+data.orderId+'',options)
                .then((response)=>response.json())
                .then((txToken)=>{
                    console.log("tkn:",txToken)
                    resolve(txToken)
                    //call the method to start the transaction startTransaction({orderId:"101",txnToken:txToken,amount:"500"});
                })
                .catch((error)=>{
                    console.log(error);
                    reject(error)
            })
        })
        .catch(error=>{
            console.log("utils errror:",error)
            reject(error)
        })
    })

}