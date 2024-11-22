/*

ai外教

[rewrite_local]
^https:\/\/(chatai\.qupeiyin\.com\/member\/index|www\.longstargpt\.com\/member\/index\/chatgpt\/chat\/sseV2|chatai\.qupeiyin\.com\/lesson\/getLessons) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/AIwj+.js

[mitm] 

hostname = chatai.qupeiyin.com

*/

var body = $response.body;

body = body.replace(/"nickname":".*?"/g, '"nickname":"konghen"');
body = body.replace(/"is_lock":"1"/g, '"is_lock":"0"');
body = body.replace(/"is_audition":"0"/g, '"is_audition":"1"');
body = body.replace(/"vip":\s*false/g, '"vip":true');
body = body.replace(/"vip_text":".*?"/g, '"vip_text":"有效期至2024年11月25日"');
body = body.replace(/"vip_endtime":".*?"/, '"vip_endtime":"998799879987"');
body = body.replace(/"is_vip":\s*"\d"/g, '"is_vip":"1"');
body = body.replace(/"vip_button_text":".*?"/g, '"vip_button_text":"🐈🐈🐈"');
//body = body.replace(/"vip_endtime":\s*"\d"/g, '"vip_endtime":"6000"');
//body = body.replace(/"forbid_end_time":\s*"\d"/g, '"forbid_end_time":4800');
//body = body.replace(/"status":\s*"\d"/g, '"status":"1"');
$done({ body });