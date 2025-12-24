/***************
 
 

[rewrite_local]
# >foodie+++ - 美食相機
^https?:\/\/purchase-foodiecn-api.yiruikecorp.com\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Foodie+++.js

[mitm] 
hostname = purchase-qingtu-api.b612kaji.com,api-qingtu.kajicam.com,purchase-tianyan-api.tianyancam.com,purchase-foodiecn-api.yiruikecorp.com


***************/








let body = {
  "result": {
    "products": [
      {
        "status": "ACTIVE",
        "originalTransactionId": "700002235019432",
        "productId": "com.linecorp.Foodiecn.subscribe.oneyear",
        "startDate": 1765115682000,
        "storeType": "APPLE",
        "expireDate": 3776083200000,
        "isTrialPeriod": false,
        "managed": false
      }
    ],
    "vipSegments": [
      "SUBSCRIPTION_FREE_ACTIVE",
      "SUBSCRIBED_VIP"
    ],
    "activated": true
  }
};

$done({ body: JSON.stringify(body) });