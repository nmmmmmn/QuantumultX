/***************

🐈RNIAero+++

*  * @Author: 🐈🐈🐈


[rewrite_local]
https?:\/\/rni\-endpoint\-aero\-prd url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/🐈RNIAero+++.js

[MITM]
hostname = rni-endpoint-aero-prd-d0g8f8h2eseddpf7.z02.azurefd.net

***************/

var Parr = JSON.parse($response.body);
Parr.FilmsProStatus = 1
Parr.AeroProStatus = 1
$done({body: JSON.stringify(Parr)});