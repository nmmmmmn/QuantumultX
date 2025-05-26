/***

 📷
*  * @Author: 🐈
        
[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/iTunes.js


^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/RR.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/RR.js


^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Lightroom+++.js

^https?:\/\/.*oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Focos+++.js

^https?:\/\/fimo\.appfimo\.com\/fimo-user\/user url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/FIMOPRO.js

^https?:\/\/purchase-foodiecn-api.yiruikecorp.com\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Foodie+++.js





[mitm]
hostname =  buy.itunes.apple.com, api.revenuecat.com, photos.adobe.io, *.oracle.bendingspoonsapps.com, fimo.appfimo.com, purchase-qingtu-api.b612kaji.com,api-qingtu.kajicam.com,purchase-tianyan-api.tianyancam.com,purchase-foodiecn-api.yiruikecorp.com
