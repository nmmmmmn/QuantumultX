/**************************
 
*  * @Author: 🐈🐈🐈

    \📷FIMO+++

***************************

> ScriptURL         
https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/FIMO+++.js

[rewrite_local]

^https?:\/\/server\.zbisq\.com\/fimo-user url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/FIMO+++.js

[mitm] 
hostname = server.zbisq.com


**************************/


var obj=JSON.parse($response.body);obj.subscribe={valid:!0,forever:1,endTime:4092599349},$done({body:JSON.stringify(obj)});