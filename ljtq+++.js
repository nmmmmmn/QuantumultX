/***********************************

莉景
          
[rewrite_local]
^https?:\/\/ljwapi\.baichuan\.tech\/(VIP\/GetState|Login\/Device|User\/GetPrivateUsers|Vip\/GetVipType) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/ljtq+++.js


[mitm]
hostname = ljwapi.baichuan.tech


***********************************/




















var body = $response.body.replace(/vipType":0/g, 'vipType":2').replace(/isVIP":false/g, 'isVIP":true')
$done({ body });