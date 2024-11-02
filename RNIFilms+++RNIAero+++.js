/***************

RNIFilms+++/RNIAero+++

*  * @Author: 🐈🐈🐈

[rewrite_local]
https?:\/\/rni\-endpoint\-films\-prd\-dbaeb2e5fce4g5hg\.z02\.azurefd\.net url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/RNIFilms/RNIAero+++.js
https?:\/\/rni\-endpoint\-aero\-prd url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/RNIFilms/RNIAero+++.js


[MITM]
hostname = rni-endpoint-films-prd-dbaeb2e5fce4g5hg.z02.azurefd.net, rni-endpoint-aero-prd-d0g8f8h2eseddpf7.z02.azurefd.net

***************/

var Parr = JSON.parse($response.body);
Parr.FilmsProStatus = 1
Parr.AeroProStatus = 1
$done({body: JSON.stringify(Parr)});