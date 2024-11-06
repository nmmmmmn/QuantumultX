/***************

🐈RNIFilms+++.js

*  * @Author: 🐈🐈🐈


[rewrite_local]
https?:\/\/rni\-endpoint\-films\-prd\-dbaeb2e5fce4g5hg\.z02\.azurefd\.net url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/🐈RNIFilms+++.js

[MITM]
hostname = rni-endpoint-films-prd-dbaeb2e5fce4g5hg.z02.azurefd.net

***************/

var Parr = JSON.parse($response.body);
Parr.FilmsProStatus = 1
Parr.AeroProStatus = 1
$done({body: JSON.stringify(Parr)});