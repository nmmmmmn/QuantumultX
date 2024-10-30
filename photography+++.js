/***

📷📷📷
          
[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/🌵OldRoll+++.js

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/VSCO+++.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/VSCO+++.js

^https:\/\/photos\.adobe\.io\/v2\/accounts* url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Lightroom+++.js

^https?:\/\/.*oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Focos+++.js

^https?:\/\/server\.zbisq\.com\/fimo-user url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/FIMO+++.js

[mitm]
hostname =  buy.itunes.apple.com, api.revenuecat.com, photos.adobe.io, *.oracle.bendingspoonsapps.com, server.zbisq.com
