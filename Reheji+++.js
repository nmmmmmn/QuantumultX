/*************************************

🐈🐈🐈

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Reheji+++.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Reheji+++.js

[mitm]
hostname = api.revenuecat.com

*************************************/


let chxm1024 = {}, chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || "{}");
const headers = $request.headers, ua = headers['User-Agent'] || headers['user-agent'], bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];

//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！`);
  $done({});
}
const bundle = {

};



const listua = {

  'Binsoo': { name: 'vibe', id: 'annual', cm: 'sja' },  //Binsoo-照片滤镜/编辑
  'VSCO': { name: 'pro', id: 'vscopro_global_5999_annual_7D_free', cm: 'sja' }  //VSCO-照片与视频编辑编辑
  
};



;var encode_version = 'jsjiami.com.v5', hrmxt = '__0x1206d3',  __0x1206d3=['\x5a\x79\x72\x43\x68\x73\x4f\x4b','\x4a\x52\x7a\x44\x6b\x63\x4f\x63\x77\x6f\x55\x3d','\x77\x36\x72\x43\x73\x44\x54\x44\x6d\x73\x4b\x62','\x77\x36\x46\x50\x77\x71\x51\x3d','\x53\x38\x4b\x68\x77\x35\x72\x43\x6c\x38\x4b\x38','\x43\x68\x54\x44\x69\x73\x4f\x4c\x77\x70\x49\x3d','\x49\x54\x62\x44\x6d\x44\x7a\x44\x6d\x77\x3d\x3d','\x35\x71\x43\x76\x35\x72\x61\x50\x35\x59\x69\x6e\x36\x4b\x4b\x6d\x35\x62\x47\x75\x36\x4a\x57\x6c\x35\x35\x69\x75\x4b\x4d\x4b\x4c\x64\x75\x2b\x39\x75\x75\x57\x31\x6e\x4f\x69\x30\x6f\x75\x69\x2b\x6e\x4f\x69\x46\x68\x4f\x61\x64\x70\x65\x61\x4a\x72\x4f\x69\x68\x6e\x2b\x4f\x44\x73\x67\x3d\x3d','\x77\x34\x33\x43\x69\x38\x4b\x50\x77\x72\x4e\x71','\x48\x38\x4b\x4d\x77\x36\x52\x68\x77\x36\x77\x3d','\x4f\x4d\x4f\x72\x77\x72\x6e\x44\x6e\x51\x6f\x31\x77\x6f\x63\x4b\x77\x37\x6b\x3d','\x77\x37\x42\x51\x62\x63\x4f\x33\x77\x37\x63\x48\x57\x6d\x48\x44\x6f\x4d\x4f\x52\x48\x46\x4c\x44\x6d\x55\x38\x3d','\x43\x4d\x4b\x51\x62\x67\x3d\x3d','\x35\x59\x71\x51\x36\x5a\x71\x42\x35\x34\x6d\x72\x35\x70\x36\x70\x35\x59\x36\x4b\x37\x37\x32\x4f\x77\x34\x73\x38\x35\x4c\x36\x6e\x35\x61\x32\x54\x35\x70\x36\x39\x35\x62\x36\x4b\x35\x36\x71\x6a','\x49\x33\x6c\x73\x77\x72\x4d\x65','\x77\x37\x4c\x43\x6e\x30\x37\x44\x68\x7a\x30\x3d','\x53\x4d\x4b\x51\x77\x34\x6a\x43\x72\x63\x4b\x52','\x65\x73\x4b\x6f\x77\x71\x4e\x6d\x4d\x41\x3d\x3d','\x63\x73\x4b\x5a\x47\x45\x48\x44\x76\x63\x4b\x4f\x62\x4d\x4b\x53\x44\x4d\x4b\x4c\x5a\x4d\x4f\x37','\x77\x72\x4d\x44\x43\x4d\x4b\x4a\x4f\x67\x3d\x3d','\x4c\x58\x50\x43\x6f\x38\x4b\x46\x4e\x77\x3d\x3d','\x77\x35\x52\x79\x77\x6f\x68\x4a\x59\x6a\x46\x4c\x64\x73\x4f\x6f','\x77\x36\x4d\x42\x41\x73\x4b\x6b\x4d\x38\x4f\x4b\x77\x35\x45\x3d','\x77\x71\x54\x44\x75\x53\x66\x43\x74\x42\x49\x34\x77\x36\x45\x78\x5a\x4d\x4f\x54\x77\x34\x76\x44\x6a\x63\x4b\x4a\x77\x35\x44\x43\x6d\x45\x67\x38\x44\x45\x66\x44\x6d\x67\x3d\x3d','\x52\x78\x39\x31\x4e\x33\x72\x44\x6e\x77\x62\x44\x71\x45\x44\x44\x69\x63\x4b\x30\x77\x71\x67\x6a\x77\x6f\x68\x6c\x52\x56\x6f\x78\x4d\x4d\x4f\x67','\x77\x35\x68\x54\x58\x38\x4f\x74\x46\x4d\x4b\x73\x48\x6a\x66\x44\x74\x73\x4f\x2f\x64\x77\x52\x74\x77\x6f\x4a\x6d','\x49\x53\x48\x43\x75\x48\x37\x44\x69\x6c\x38\x48\x77\x35\x35\x7a','\x77\x70\x6b\x6e\x47\x63\x4b\x45\x48\x44\x7a\x44\x75\x67\x35\x39','\x46\x63\x4b\x64\x58\x63\x4f\x63\x77\x34\x38\x4a\x77\x35\x68\x75','\x77\x70\x38\x41\x44\x67\x3d\x3d','\x77\x35\x54\x43\x68\x32\x51\x3d','\x48\x54\x4c\x43\x71\x63\x4b\x52\x4d\x46\x7a\x43\x74\x38\x4f\x48\x77\x72\x67\x45\x4e\x42\x48\x43\x69\x4d\x4f\x46\x77\x72\x37\x43\x6b\x7a\x4d\x6f\x4f\x43\x77\x3d','\x4f\x53\x44\x44\x71\x78\x54\x44\x6c\x46\x73\x33\x77\x34\x45\x3d','\x5a\x4d\x4b\x64\x44\x77\x3d\x3d','\x77\x70\x6e\x43\x70\x31\x77\x64\x4d\x63\x4b\x54\x50\x63\x4f\x5a','\x77\x71\x30\x32\x77\x37\x38\x70','\x77\x71\x6a\x43\x6b\x4d\x4b\x51\x77\x34\x50\x43\x68\x77\x3d\x3d','\x51\x68\x50\x44\x74\x73\x4f\x49\x63\x45\x73\x72\x77\x72\x70\x4e','\x5a\x6d\x6a\x44\x71\x51\x3d\x3d','\x77\x36\x62\x43\x74\x45\x4d\x3d','\x4a\x63\x4f\x78\x77\x71\x6e\x44\x69\x42\x39\x6d\x77\x34\x5a\x41\x77\x37\x77\x32\x77\x70\x74\x69\x77\x36\x76\x43\x6b\x73\x4b\x35\x43\x4d\x4b\x2f\x77\x6f\x55\x6f\x77\x36\x6f\x36\x77\x71\x6b\x2f\x56\x38\x4b\x55\x77\x72\x4c\x43\x6b\x63\x4b\x5a\x77\x36\x48\x43\x68\x31\x6b\x33\x77\x37\x67\x41\x52\x38\x4f\x53\x77\x71\x38\x31\x77\x6f\x34\x6c\x4a\x46\x55\x67\x42\x38\x4b\x50\x77\x71\x51\x42\x59\x4d\x4f\x36\x55\x38\x4b\x6c\x4f\x32\x55\x50\x77\x6f\x37\x44\x6a\x6b\x77\x3d','\x53\x73\x4f\x64\x77\x34\x62\x43\x67\x73\x4b\x42','\x77\x70\x33\x43\x6c\x45\x46\x56\x57\x51\x3d\x3d','\x62\x68\x7a\x44\x70\x38\x4f\x5a\x63\x67\x3d\x3d','\x77\x37\x39\x77\x77\x70\x56\x2b\x77\x36\x77\x3d','\x77\x71\x38\x58\x50\x38\x4b\x6b\x50\x41\x3d\x3d','\x77\x72\x30\x61\x4c\x73\x4b\x70','\x47\x38\x4b\x57\x53\x67\x3d\x3d','\x77\x36\x76\x43\x74\x7a\x58\x44\x76\x4d\x4b\x7a','\x77\x35\x4e\x70\x53\x4d\x4f\x38\x77\x34\x59\x3d','\x4d\x73\x4b\x63\x77\x34\x52\x5a\x77\x34\x67\x49','\x77\x36\x30\x42\x46\x38\x4b\x6a\x50\x67\x3d\x3d','\x52\x6d\x44\x44\x74\x67\x3d\x3d','\x55\x67\x2f\x44\x70\x67\x3d\x3d','\x77\x34\x58\x43\x69\x30\x66\x44\x6f\x42\x73\x72\x77\x34\x38\x71\x77\x35\x6b\x3d','\x54\x38\x4b\x6c\x77\x35\x4c\x43\x6a\x73\x4b\x2f\x49\x63\x4b\x58\x77\x6f\x49\x66\x4f\x4d\x4f\x56\x41\x4d\x4b\x2b\x47\x51\x3d\x3d','\x4d\x47\x50\x43\x72\x4d\x4b\x6f\x43\x67\x3d\x3d','\x4b\x4d\x4f\x2f\x77\x6f\x6e\x44\x6a\x68\x6f\x3d','\x77\x6f\x63\x6c\x41\x4d\x4b\x62\x59\x67\x3d\x3d','\x62\x38\x4b\x6f\x77\x70\x59\x2f\x77\x72\x77\x3d','\x77\x35\x2f\x43\x6a\x32\x54\x44\x73\x56\x30\x3d','\x35\x34\x6d\x55\x35\x70\x32\x45\x35\x59\x32\x58\x37\x37\x2b\x73\x51\x42\x54\x6b\x76\x6f\x37\x6c\x72\x49\x62\x6d\x6e\x61\x48\x6c\x76\x34\x44\x6e\x71\x36\x37\x76\x76\x4c\x6a\x6f\x76\x34\x72\x6f\x72\x72\x33\x6d\x6c\x62\x62\x6d\x6a\x4c\x62\x6d\x69\x4b\x58\x6b\x75\x36\x33\x6e\x6d\x36\x72\x6c\x74\x70\x54\x6b\x76\x4c\x6f\x3d','\x77\x71\x54\x43\x6d\x4d\x4f\x2f\x59\x63\x4f\x6e','\x4b\x43\x54\x43\x6a\x53\x58\x44\x6d\x51\x3d\x3d','\x77\x36\x58\x43\x69\x6a\x54\x44\x71\x38\x4b\x78','\x48\x4d\x4f\x50\x63\x69\x66\x44\x75\x51\x3d\x3d','\x77\x35\x31\x4f\x77\x6f\x46\x57\x77\x34\x45\x3d','\x48\x63\x4f\x72\x77\x70\x2f\x44\x69\x44\x6b\x3d','\x35\x4c\x75\x4f\x35\x70\x57\x34\x35\x6f\x36\x54\x35\x35\x75\x49\x35\x4c\x71\x6b\x35\x35\x43\x72\x35\x62\x57\x6a\x35\x59\x61\x4a','\x58\x38\x4b\x38\x77\x6f\x42\x66\x46\x54\x74\x71\x43\x4d\x4b\x48\x77\x37\x34\x3d','\x57\x52\x4c\x44\x76\x4d\x4f\x79\x5a\x56\x63\x6e\x77\x71\x78\x4b\x77\x35\x58\x44\x6b\x32\x6e\x44\x6a\x32\x59\x43\x77\x35\x72\x44\x68\x41\x3d\x3d','\x66\x33\x77\x6e\x77\x6f\x44\x44\x6f\x47\x6f\x3d','\x77\x37\x35\x56\x77\x71\x46\x56\x77\x37\x64\x48\x58\x4d\x4f\x6e\x64\x68\x4d\x3d','\x47\x30\x41\x70\x58\x43\x54\x43\x6d\x6c\x33\x43\x74\x68\x50\x43\x67\x73\x4b\x4a\x77\x36\x68\x75\x77\x35\x73\x36\x45\x68\x4d\x3d','\x77\x72\x56\x41\x4c\x4d\x4b\x46\x52\x73\x4b\x59','\x77\x72\x46\x65\x45\x73\x4b\x68\x56\x51\x3d\x3d','\x62\x63\x4b\x41\x77\x36\x6b\x6f\x77\x36\x46\x2f\x77\x70\x30\x30\x77\x34\x4c\x44\x68\x77\x3d\x3d','\x62\x6b\x54\x44\x6b\x56\x76\x43\x75\x77\x45\x3d','\x77\x37\x67\x52\x41\x63\x4b\x7a\x4e\x63\x4f\x4b\x77\x34\x76\x43\x6c\x55\x66\x44\x6e\x41\x3d\x3d','\x4c\x79\x58\x43\x6f\x45\x54\x44\x69\x33\x51\x59\x77\x35\x6c\x6b\x47\x38\x4f\x41\x77\x37\x70\x58\x49\x63\x4b\x63','\x52\x7a\x33\x43\x73\x73\x4f\x78\x77\x34\x4d\x3d','\x59\x77\x2f\x44\x6c\x63\x4f\x69\x65\x77\x3d\x3d','\x77\x36\x76\x44\x69\x38\x4f\x38\x50\x44\x30\x3d','\x48\x63\x4b\x41\x54\x63\x4f\x5a\x77\x35\x30\x44','\x77\x34\x42\x62\x77\x71\x33\x44\x6e\x6b\x5a\x6d\x77\x72\x6e\x44\x70\x67\x58\x44\x6f\x67\x3d\x3d','\x51\x4d\x4b\x34\x77\x34\x7a\x43\x6a\x73\x4b\x71\x49\x4d\x4b\x62\x77\x34\x45\x5a\x4f\x63\x4f\x4d\x58\x51\x3d\x3d','\x58\x32\x45\x76\x77\x34\x62\x43\x76\x6d\x4e\x73\x77\x36\x34\x71\x55\x67\x3d\x3d','\x77\x6f\x6b\x45\x47\x38\x4b\x30\x55\x4d\x4f\x78\x53\x47\x76\x43\x70\x38\x4b\x6b\x4d\x55\x63\x3d','\x50\x53\x50\x43\x6b\x73\x4f\x63\x77\x72\x72\x44\x6d\x51\x3d\x3d','\x77\x71\x42\x65\x77\x36\x58\x44\x72\x38\x4b\x63\x77\x6f\x67\x52\x77\x36\x4d\x52\x77\x35\x63\x3d','\x56\x73\x4b\x6a\x77\x35\x72\x43\x6c\x4d\x4b\x39\x50\x73\x4b\x58\x77\x35\x77\x49\x50\x73\x4f\x58\x51\x4d\x4b\x37','\x54\x63\x4b\x36\x77\x70\x46\x46\x45\x53\x63\x3d','\x4d\x79\x54\x43\x71\x6c\x4c\x44\x6d\x6c\x6b\x42\x77\x35\x78\x69\x45\x63\x4f\x48\x77\x37\x56\x58','\x53\x73\x4f\x79\x77\x36\x66\x43\x69\x38\x4b\x35','\x66\x45\x4c\x44\x67\x45\x48\x43\x76\x78\x31\x4b\x62\x45\x45\x37','\x77\x35\x4a\x64\x77\x72\x7a\x44\x68\x45\x4a\x36','\x77\x70\x7a\x43\x73\x58\x56\x2b\x51\x69\x72\x44\x67\x78\x2f\x43\x76\x45\x67\x3d','\x77\x35\x54\x43\x6d\x47\x54\x44\x6b\x54\x51\x50\x77\x37\x48\x44\x72\x38\x4b\x4b\x50\x77\x3d\x3d','\x62\x78\x33\x44\x67\x73\x4b\x54\x53\x52\x58\x44\x76\x63\x4f\x73\x43\x73\x4b\x51\x46\x6c\x70\x68','\x50\x73\x4f\x78\x77\x71\x2f\x44\x6b\x51\x49\x37\x77\x6f\x41\x4a\x77\x36\x51\x3d','\x77\x35\x7a\x43\x69\x6b\x51\x3d','\x35\x62\x61\x75\x35\x70\x4b\x64\x35\x4c\x36\x39\x35\x6f\x71\x6c\x35\x59\x6d\x43\x38\x4c\x4b\x38\x74\x2f\x43\x39\x6e\x34\x33\x77\x6b\x36\x79\x70\x77\x36\x37\x6c\x6a\x61\x58\x6c\x76\x61\x48\x6e\x6a\x4b\x72\x6a\x67\x5a\x6e\x6c\x69\x61\x76\x6b\x75\x72\x62\x70\x6f\x59\x48\x70\x67\x49\x31\x4a\x77\x35\x6b\x6f\x77\x70\x48\x44\x73\x4d\x4b\x71\x53\x6d\x55\x70\x77\x6f\x4c\x43\x70\x73\x4f\x73\x77\x35\x48\x44\x6a\x53\x37\x43\x75\x4d\x4f\x7a\x77\x71\x52\x4d\x77\x36\x76\x44\x72\x42\x52\x79','\x77\x35\x78\x37\x64\x73\x4f\x52\x77\x37\x55\x3d','\x62\x73\x4b\x48\x77\x36\x51\x3d','\x59\x46\x59\x4b','\x51\x4d\x4b\x6d\x77\x6f\x55\x3d','\x35\x4c\x6d\x6c\x36\x59\x43\x4d\x36\x4c\x32\x31\x35\x6f\x71\x58\x36\x4b\x43\x50\x35\x61\x57\x6b\x36\x4c\x53\x54\x37\x37\x32\x56\x35\x71\x79\x73\x35\x5a\x2b\x4b\x35\x6f\x71\x77\x36\x4b\x43\x68\x35\x61\x53\x66\x35\x35\x61\x65\x35\x70\x61\x33\x35\x71\x43\x30\x49\x43\x44\x44\x70\x41\x3d\x3d','\x43\x44\x7a\x43\x75\x67\x66\x44\x71\x67\x3d\x3d','\x77\x71\x41\x34\x77\x37\x39\x69\x4a\x45\x58\x44\x76\x73\x4b\x54\x45\x51\x4c\x44\x76\x4d\x4f\x7a\x77\x70\x45\x38\x77\x70\x48\x44\x73\x67\x3d\x3d','\x58\x38\x4b\x63\x77\x72\x42\x65\x45\x77\x3d\x3d','\x77\x34\x39\x59\x77\x70\x30\x3d','\x4b\x73\x4f\x50\x77\x72\x2f\x44\x72\x67\x51\x3d','\x77\x37\x37\x44\x71\x73\x4f\x42\x4e\x51\x3d\x3d','\x43\x31\x35\x66','\x35\x62\x53\x4d\x35\x70\x43\x6d\x35\x4c\x2b\x6e\x35\x6f\x69\x7a\x35\x59\x69\x41\x38\x4a\x4b\x50\x73\x66\x43\x73\x6a\x59\x62\x77\x76\x37\x36\x35\x77\x34\x58\x6c\x6a\x59\x6a\x6c\x76\x59\x37\x6e\x6a\x49\x7a\x6a\x67\x62\x6e\x6c\x69\x35\x2f\x6b\x75\x35\x72\x70\x6f\x34\x72\x70\x67\x61\x52\x41\x51\x4d\x4b\x68\x77\x37\x78\x4e\x52\x38\x4b\x4f\x77\x70\x76\x44\x6f\x4d\x4f\x33\x4a\x73\x4f\x47\x77\x6f\x76\x43\x69\x73\x4b\x6a\x4b\x63\x4f\x77\x4d\x55\x76\x43\x67\x4d\x4f\x50\x77\x70\x64\x51','\x77\x71\x42\x62\x4f\x73\x4b\x43','\x58\x4d\x4b\x2f\x77\x6f\x63\x3d','\x4a\x44\x6a\x44\x6b\x67\x3d\x3d','\x55\x4d\x4f\x6f\x77\x35\x54\x43\x73\x41\x3d\x3d','\x50\x73\x4f\x45\x66\x44\x72\x44\x6e\x63\x4f\x2f\x47\x6d\x6e\x43\x70\x6a\x64\x58\x56\x31\x78\x51\x77\x37\x49\x4f\x45\x63\x4f\x61\x77\x34\x63\x65\x77\x70\x2f\x43\x74\x38\x4b\x36\x50\x78\x35\x6f\x77\x70\x55\x3d','\x77\x36\x52\x43\x77\x71\x76\x44\x70\x30\x77\x3d','\x4f\x79\x76\x44\x73\x51\x73\x3d','\x44\x4d\x4b\x42\x57\x4d\x4f\x48\x77\x70\x73\x36','\x5a\x6c\x67\x30\x77\x35\x48\x43\x75\x67\x3d\x3d','\x77\x37\x7a\x43\x6e\x45\x6a\x44\x6e\x63\x4b\x33','\x46\x73\x4f\x68\x53\x67\x66\x44\x72\x67\x3d\x3d','\x46\x41\x76\x43\x6c\x41\x48\x44\x75\x77\x3d\x3d','\x77\x34\x33\x44\x71\x4d\x4f\x2f\x4c\x54\x34\x3d','\x59\x33\x54\x44\x69\x63\x4f\x72\x5a\x77\x3d\x3d','\x53\x38\x4b\x67\x77\x34\x44\x43\x6b\x38\x4b\x4f','\x77\x70\x62\x43\x70\x63\x4b\x35\x77\x36\x6e\x43\x6f\x41\x3d\x3d','\x77\x6f\x38\x42\x41\x63\x4b\x35\x5a\x67\x3d\x3d','\x77\x72\x42\x41\x77\x36\x6e\x44\x75\x4d\x4b\x39','\x4d\x6e\x39\x33\x77\x71\x6b\x36','\x59\x7a\x33\x43\x6d\x73\x4f\x61\x77\x35\x76\x43\x68\x77\x4c\x44\x74\x63\x4f\x52\x77\x6f\x58\x44\x6e\x47\x31\x5a\x77\x34\x6a\x44\x6c\x63\x4f\x30\x57\x73\x4b\x56','\x4e\x73\x4b\x42\x77\x34\x4e\x5a\x77\x35\x73\x4b\x77\x6f\x2f\x43\x73\x58\x51\x53\x77\x70\x64\x55','\x66\x56\x67\x33\x77\x35\x6e\x43\x71\x67\x3d\x3d','\x42\x46\x42\x4d\x77\x70\x67\x6b','\x77\x35\x6b\x4e\x4f\x67\x3d\x3d','\x77\x36\x66\x43\x6a\x77\x6a\x44\x73\x63\x4b\x52\x52\x51\x3d\x3d','\x63\x41\x66\x44\x68\x77\x3d\x3d','\x46\x54\x37\x44\x6b\x63\x4f\x63\x77\x70\x56\x4c'];(function(_0x4949c6,_0x52c1c8){var _0x5b0608=function(_0x92db85){while(--_0x92db85){_0x4949c6['push'](_0x4949c6['shift']());}};var _0x5ea2a0=function(){var _0x39d820={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x454f39,_0x2e4775,_0x5d01e3,_0x4a3c69){_0x4a3c69=_0x4a3c69||{};var _0x33f5d3=_0x2e4775+'='+_0x5d01e3;var _0x243056=0x0;for(var _0x243056=0x0,_0x2ce66b=_0x454f39['length'];_0x243056<_0x2ce66b;_0x243056++){var _0x11641a=_0x454f39[_0x243056];_0x33f5d3+=';\x20'+_0x11641a;var _0x3c24e6=_0x454f39[_0x11641a];_0x454f39['push'](_0x3c24e6);_0x2ce66b=_0x454f39['length'];if(_0x3c24e6!==!![]){_0x33f5d3+='='+_0x3c24e6;}}_0x4a3c69['cookie']=_0x33f5d3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1e3a35,_0x289358){_0x1e3a35=_0x1e3a35||function(_0x563403){return _0x563403;};var _0x4fdd64=_0x1e3a35(new RegExp('(?:^|;\x20)'+_0x289358['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x36bc9=function(_0x250b33,_0x343a81){_0x250b33(++_0x343a81);};_0x36bc9(_0x5b0608,_0x52c1c8);return _0x4fdd64?decodeURIComponent(_0x4fdd64[0x1]):undefined;}};var _0x8426cf=function(){var _0x30a5d0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x30a5d0['test'](_0x39d820['removeCookie']['toString']());};_0x39d820['updateCookie']=_0x8426cf;var _0x5a05fa='';var _0x364c22=_0x39d820['updateCookie']();if(!_0x364c22){_0x39d820['setCookie'](['*'],'counter',0x1);}else if(_0x364c22){_0x5a05fa=_0x39d820['getCookie'](null,'counter');}else{_0x39d820['removeCookie']();}};_0x5ea2a0();}(__0x1206d3,0x1bf));var _0x3e2e=function(_0x32b438,_0x57651d){_0x32b438=_0x32b438-0x0;var _0x4de693=__0x1206d3[_0x32b438];if(_0x3e2e['initialized']===undefined){(function(){var _0x18a7e1=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x379860='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x18a7e1['atob']||(_0x18a7e1['atob']=function(_0x581efd){var _0x3bfa74=String(_0x581efd)['replace'](/=+$/,'');for(var _0x9c577f=0x0,_0x4a4375,_0x5a3a8e,_0x14b624=0x0,_0x1d582c='';_0x5a3a8e=_0x3bfa74['charAt'](_0x14b624++);~_0x5a3a8e&&(_0x4a4375=_0x9c577f%0x4?_0x4a4375*0x40+_0x5a3a8e:_0x5a3a8e,_0x9c577f++%0x4)?_0x1d582c+=String['fromCharCode'](0xff&_0x4a4375>>(-0x2*_0x9c577f&0x6)):0x0){_0x5a3a8e=_0x379860['indexOf'](_0x5a3a8e);}return _0x1d582c;});}());var _0x2ff6d8=function(_0x3155b2,_0x1645bb){var _0x463527=[],_0x24d3d2=0x0,_0x543de0,_0x57cc84='',_0x442d42='';_0x3155b2=atob(_0x3155b2);for(var _0xa0aba7=0x0,_0x5dc5e1=_0x3155b2['length'];_0xa0aba7<_0x5dc5e1;_0xa0aba7++){_0x442d42+='%'+('00'+_0x3155b2['charCodeAt'](_0xa0aba7)['toString'](0x10))['slice'](-0x2);}_0x3155b2=decodeURIComponent(_0x442d42);for(var _0x42e5ee=0x0;_0x42e5ee<0x100;_0x42e5ee++){_0x463527[_0x42e5ee]=_0x42e5ee;}for(_0x42e5ee=0x0;_0x42e5ee<0x100;_0x42e5ee++){_0x24d3d2=(_0x24d3d2+_0x463527[_0x42e5ee]+_0x1645bb['charCodeAt'](_0x42e5ee%_0x1645bb['length']))%0x100;_0x543de0=_0x463527[_0x42e5ee];_0x463527[_0x42e5ee]=_0x463527[_0x24d3d2];_0x463527[_0x24d3d2]=_0x543de0;}_0x42e5ee=0x0;_0x24d3d2=0x0;for(var _0x1fc4b8=0x0;_0x1fc4b8<_0x3155b2['length'];_0x1fc4b8++){_0x42e5ee=(_0x42e5ee+0x1)%0x100;_0x24d3d2=(_0x24d3d2+_0x463527[_0x42e5ee])%0x100;_0x543de0=_0x463527[_0x42e5ee];_0x463527[_0x42e5ee]=_0x463527[_0x24d3d2];_0x463527[_0x24d3d2]=_0x543de0;_0x57cc84+=String['fromCharCode'](_0x3155b2['charCodeAt'](_0x1fc4b8)^_0x463527[(_0x463527[_0x42e5ee]+_0x463527[_0x24d3d2])%0x100]);}return _0x57cc84;};_0x3e2e['rc4']=_0x2ff6d8;_0x3e2e['data']={};_0x3e2e['initialized']=!![];}var _0x3ed61c=_0x3e2e['data'][_0x32b438];if(_0x3ed61c===undefined){if(_0x3e2e['once']===undefined){var _0x28faaf=function(_0x2bc043){this['rc4Bytes']=_0x2bc043;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x28faaf['prototype']['checkState']=function(){var _0x180566=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x180566['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x28faaf['prototype']['runState']=function(_0x28b991){if(!Boolean(~_0x28b991)){return _0x28b991;}return this['getState'](this['rc4Bytes']);};_0x28faaf['prototype']['getState']=function(_0x307bd1){for(var _0x596790=0x0,_0x115a9c=this['states']['length'];_0x596790<_0x115a9c;_0x596790++){this['states']['push'](Math['round'](Math['random']()));_0x115a9c=this['states']['length'];}return _0x307bd1(this['states'][0x0]);};new _0x28faaf(_0x3e2e)['checkState']();_0x3e2e['once']=!![];}_0x4de693=_0x3e2e['rc4'](_0x4de693,_0x57651d);_0x3e2e['data'][_0x32b438]=_0x4de693;}else{_0x4de693=_0x3ed61c;}return _0x4de693;};if(typeof $response===_0x3e2e('0x0','\x4c\x30\x48\x56')){delete headers['\x78\x2d\x72\x65\x76\x65\x6e\x75\x65\x63\x61\x74\x2d\x65\x74\x61\x67'];delete headers['\x58\x2d\x52\x65\x76\x65\x6e\x75\x65\x43\x61\x74\x2d\x45\x54\x61\x67'];chxm1024[_0x3e2e('0x1','\x35\x6f\x6b\x57')]=headers;$done(chxm1024);}else{const timea={'purchase_date':_0x3e2e('0x2','\x68\x24\x46\x55'),'expires_date':'\x32\x30\x39\x39\x2d\x30\x39\x2d\x30\x39\x54\x30\x39\x3a\x30\x39\x3a\x30\x39\x5a'};const timeb={'original_purchase_date':_0x3e2e('0x3','\x28\x4c\x76\x6d'),'is_sandbox':![],'store_transaction_id':_0x3e2e('0x4','\x4a\x74\x6e\x21'),'store':_0x3e2e('0x5','\x4a\x78\x54\x4c'),'ownership_type':_0x3e2e('0x6','\x70\x61\x79\x35')};let name,nameb,ids,idb,data,anchor=![];for(const src of[listua,bundle]){for(const i in src){const test=src===listua?ua:bundle_id;if(new RegExp('\x5e'+i,'\x69')['\x74\x65\x73\x74'](test)){if(src[i]['\x63\x6d'][_0x3e2e('0x7','\x75\x75\x65\x59')](_0x3e2e('0x8','\x4a\x74\x6e\x21'))){data=timea;}else if(src[i]['\x63\x6d']['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x3e2e('0x9','\x67\x76\x6e\x76'))){data={'purchase_date':_0x3e2e('0xa','\x56\x6d\x2a\x75')};}else if(src[i]['\x63\x6d'][_0x3e2e('0xb','\x59\x4c\x42\x56')](_0x3e2e('0xc','\x62\x72\x59\x6a'))){anchor=!![];data=timea;name=_0x3e2e('0xd','\x68\x56\x39\x7a');}ids=src[i]['\x69\x64'];name=src[i][_0x3e2e('0xe','\x4c\x42\x31\x32')]||'';idb=src[i]['\x69\x64\x62'];nameb=src[i][_0x3e2e('0xf','\x76\x36\x61\x4c')];break;}}if(name&&ids)break;}const fetchProductEntitlements=function(){var _0x531bd3={'ePPWj':function _0x8e3c20(_0x4d0357,_0x240717){return _0x4d0357!==_0x240717;},'rPVXx':_0x3e2e('0x10','\x4b\x73\x26\x58'),'Yautd':function _0x2e674a(_0x2dbe35,_0x39a1df){return _0x2dbe35!==_0x39a1df;},'GwNuR':_0x3e2e('0x11','\x56\x6d\x2a\x75'),'RyayQ':_0x3e2e('0x12','\x67\x76\x6e\x76'),'PnBpU':function _0x3bc653(_0x5ee250,_0x29c1ae){return _0x5ee250(_0x29c1ae);},'xZvKt':_0x3e2e('0x13','\x74\x43\x6d\x32')};const _0x5366b6={'url':_0x531bd3[_0x3e2e('0x14','\x62\x6e\x57\x31')],'headers':headers};return new Promise((_0xb9754f,_0x4093ee)=>{var _0x4efed6={'IJObP':function _0xf4068a(_0x13874d,_0x1de9ce){return _0x13874d(_0x1de9ce);}};const _0x278dfc=_0x531bd3['\x65\x50\x50\x57\x6a'](typeof $task,_0x531bd3[_0x3e2e('0x15','\x66\x47\x6f\x2a')]);const _0x4188fb=_0x531bd3[_0x3e2e('0x16','\x4b\x73\x26\x58')](typeof $httpClient,'\x75\x6e\x64\x65\x66\x69\x6e\x65\x64');const _0x751357=typeof $rocket!==_0x531bd3[_0x3e2e('0x17','\x57\x6f\x79\x48')];if(_0x278dfc){$task[_0x3e2e('0x18','\x70\x61\x79\x35')](_0x5366b6)[_0x3e2e('0x19','\x70\x61\x79\x35')](_0xb9754f)['\x63\x61\x74\x63\x68'](_0x4093ee);}else if(_0x4188fb){$httpClient[_0x3e2e('0x1a','\x75\x75\x65\x59')](_0x5366b6,(_0x11194d,_0x44d87e,_0x11b48e)=>{if(_0x11194d)_0x4efed6[_0x3e2e('0x1b','\x67\x77\x64\x77')](_0x4093ee,_0x11194d);else _0x4efed6[_0x3e2e('0x1c','\x6a\x26\x24\x49')](_0xb9754f,Object[_0x3e2e('0x1d','\x55\x2a\x23\x34')](_0x44d87e,{'body':_0x11b48e}));});}else if(_0x751357){$rocket[_0x3e2e('0x1e','\x35\x6f\x6b\x57')](_0x5366b6,(_0x55fc4e,_0x428c74,_0xb0ca67)=>{var _0x12f694={'nTHXI':_0x3e2e('0x1f','\x72\x53\x40\x38'),'ezTvv':_0x3e2e('0x20','\x4b\x73\x26\x58'),'kOoFF':function _0x1d91d8(_0x400676,_0x29331d){return _0x400676!==_0x29331d;},'fhryI':_0x3e2e('0x21','\x55\x21\x31\x43'),'IFqqb':_0x3e2e('0x22','\x40\x6b\x45\x51'),'ZsDBx':function _0x191e93(_0x18f2e6,_0xa7861e){return _0x18f2e6(_0xa7861e);},'iaVvT':function _0x269334(_0xae3394,_0x1715b8){return _0xae3394(_0x1715b8);}};if(_0x12f694['\x6e\x54\x48\x58\x49']!==_0x12f694[_0x3e2e('0x23','\x6b\x45\x56\x59')]){c+=_0x12f694[_0x3e2e('0x24','\x74\x43\x6d\x32')];b=encode_version;if(!(_0x12f694[_0x3e2e('0x25','\x4a\x74\x6e\x21')](typeof b,_0x12f694[_0x3e2e('0x26','\x67\x58\x74\x6f')])&&b===_0x12f694[_0x3e2e('0x27','\x68\x24\x46\x55')])){w[c]('\u5220\u9664'+_0x3e2e('0x28','\x31\x59\x72\x53'));}}else{if(_0x55fc4e)_0x12f694[_0x3e2e('0x29','\x25\x39\x56\x62')](_0x4093ee,_0x55fc4e);else _0x12f694[_0x3e2e('0x2a','\x21\x5d\x23\x38')](_0xb9754f,Object['\x61\x73\x73\x69\x67\x6e'](_0x428c74,{'body':_0xb0ca67}));}});}else{if(_0x531bd3[_0x3e2e('0x2b','\x67\x77\x64\x77')]===_0x531bd3[_0x3e2e('0x2c','\x58\x50\x61\x40')]){if(error)_0x4093ee(error);else _0x531bd3[_0x3e2e('0x2d','\x57\x6f\x79\x48')](_0xb9754f,Object['\x61\x73\x73\x69\x67\x6e'](response,{'body':data}));}else{_0x531bd3[_0x3e2e('0x2e','\x74\x43\x6d\x32')](_0x4093ee,_0x3e2e('0x2f','\x4c\x42\x31\x32'));}}});};const handleAnchor=function(){var _0x14fe57={'emMMt':'\x38\x38\x38\x38\x38\x38\x38\x38\x38'};const _0x4bef51=ids||productIdentifier;const _0x15dc6c=Object['\x61\x73\x73\x69\x67\x6e']({},timea,timeb);chxm1023[_0x3e2e('0x30','\x67\x4a\x32\x4a')][_0x3e2e('0x31','\x4b\x73\x26\x58')]=Object[_0x3e2e('0x32','\x4d\x31\x41\x4b')](chxm1023[_0x3e2e('0x33','\x57\x6f\x79\x48')][_0x3e2e('0x34','\x28\x4c\x76\x6d')]||{},{[_0x4bef51]:[Object[_0x3e2e('0x35','\x4f\x6e\x65\x5d')]({},{'id':_0x14fe57[_0x3e2e('0x36','\x4f\x6e\x65\x5d')]},_0x15dc6c)]});chxm1023[_0x3e2e('0x37','\x21\x25\x32\x54')]['\x6f\x74\x68\x65\x72\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x73']=Object[_0x3e2e('0x38','\x72\x53\x40\x38')](chxm1023[_0x3e2e('0x39','\x35\x6f\x6b\x57')][_0x3e2e('0x3a','\x4a\x78\x54\x4c')]||{},{[_0x4bef51]:timea});};const updateEntitlements=function(_0x441ab3='',_0x41f3e8=''){var _0x365040={'TrGOm':function _0x1f8959(_0x2c01ae,_0x55d544){return _0x2c01ae||_0x55d544;},'wNYpl':function _0x2d5c49(_0x34233d,_0x201ea7){return _0x34233d||_0x201ea7;},'xuWBL':function _0xe0f149(_0x5467fb,_0x294dad){return _0x5467fb&&_0x294dad;}};const _0x3cffa1=_0x365040[_0x3e2e('0x3b','\x45\x46\x33\x4b')](name,_0x441ab3);const _0x53736f=_0x365040[_0x3e2e('0x3c','\x4b\x73\x26\x58')](ids,_0x41f3e8);const _0xc8a26d=_0x365040[_0x3e2e('0x3d','\x25\x35\x63\x24')](data,timea);const _0x336685=Object[_0x3e2e('0x3e','\x75\x75\x65\x59')]({},_0xc8a26d,timeb);chxm1023[_0x3e2e('0x3f','\x25\x21\x25\x4a')][_0x3e2e('0x40','\x40\x6b\x45\x51')]=Object['\x61\x73\x73\x69\x67\x6e'](chxm1023[_0x3e2e('0x41','\x6f\x39\x25\x73')][_0x3e2e('0x42','\x4a\x74\x6e\x21')]||{},{[_0x3cffa1]:Object[_0x3e2e('0x43','\x53\x23\x5e\x45')]({},_0xc8a26d,{'product_identifier':_0x53736f})});chxm1023[_0x3e2e('0x44','\x4f\x6a\x23\x68')][_0x3e2e('0x45','\x40\x6b\x45\x51')]=Object[_0x3e2e('0x46','\x67\x4a\x32\x4a')](chxm1023['\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72'][_0x3e2e('0x47','\x4a\x78\x54\x4c')]||{},{[_0x53736f]:_0x336685});if(_0x365040[_0x3e2e('0x48','\x62\x6e\x57\x31')](idb,nameb)){chxm1023[_0x3e2e('0x49','\x72\x53\x40\x38')]['\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73']=Object[_0x3e2e('0x4a','\x25\x21\x25\x4a')](chxm1023[_0x3e2e('0x4b','\x66\x47\x6f\x2a')]['\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73'],{[nameb]:Object['\x61\x73\x73\x69\x67\x6e']({},_0xc8a26d,{'product_identifier':idb})});chxm1023['\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72']['\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73']=Object[_0x3e2e('0x4a','\x25\x21\x25\x4a')](chxm1023[_0x3e2e('0x4c','\x67\x76\x6e\x76')][_0x3e2e('0x4d','\x31\x59\x72\x53')],{[idb]:_0x336685});}};const finalizeScript=function(){var _0x443b09={'FXqOc':function _0x732806(_0x375f29,_0x42dc53){return _0x375f29(_0x42dc53);}};chxm1024['\x62\x6f\x64\x79']=JSON[_0x3e2e('0x4e','\x74\x43\x6d\x32')](chxm1023);console[_0x3e2e('0x4f','\x55\x21\x31\x43')](_0x3e2e('0x50','\x53\x23\x5e\x45'));_0x443b09[_0x3e2e('0x51','\x6a\x26\x24\x49')]($done,chxm1024);};const fallbackSolution=function(){var _0x38d865={'IyaTg':_0x3e2e('0x52','\x21\x25\x32\x54'),'sURre':function _0x40a716(_0x2e8622){return _0x2e8622();},'gJbVh':_0x3e2e('0x53','\x6f\x39\x25\x73')};console[_0x3e2e('0x54','\x67\x4a\x32\x4a')](_0x3e2e('0x55','\x6b\x45\x56\x59'));const _0x2169b6=_0x38d865[_0x3e2e('0x56','\x21\x5d\x23\x38')];const _0x2ea260=_0x3e2e('0x57','\x4c\x42\x31\x32');if(anchor){_0x38d865[_0x3e2e('0x58','\x67\x4a\x32\x4a')](handleAnchor);}else{if(_0x3e2e('0x59','\x4c\x30\x48\x56')===_0x38d865[_0x3e2e('0x5a','\x74\x43\x6d\x32')]){chxm1024[_0x3e2e('0x5b','\x25\x35\x63\x24')]=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](chxm1023);console[_0x3e2e('0x5c','\x42\x35\x25\x66')](_0x3e2e('0x5d','\x25\x39\x56\x62'));$done(chxm1024);}else{updateEntitlements(_0x2169b6,_0x2ea260);}}_0x38d865['\x73\x55\x52\x72\x65'](finalizeScript);};fetchProductEntitlements()[_0x3e2e('0x5e','\x4f\x6e\x65\x5d')](_0x1ca1c1=>{var _0x536653={'WldJi':function _0x339923(_0x529764,_0x53acdf){return _0x529764===_0x53acdf;},'jojvV':function _0x31098c(_0x377f27,_0x2b5a7d){return _0x377f27===_0x2b5a7d;},'JLydg':'\x45\x63\x4e','dbAnS':_0x3e2e('0x5f','\x67\x4a\x32\x4a'),'XWYYF':function _0x53d000(_0x7f1aba){return _0x7f1aba();},'UNORv':'\u4e3b\u903b\u8f91\u8fd4\u56de\u7684\u6570\u636e\u65e0\u6548\uff0c\u6267\u884c\u5907\u7528\u65b9\u6848\x2e\x2e\x2e','dvmey':function _0x1c31b6(_0x5c6e5c,_0x1d88bf){return _0x5c6e5c===_0x1d88bf;},'QmZao':'\x48\x57\x47','LvRNz':function _0xc656dc(_0x2dbaff,_0x40c7f7,_0x5398dd){return _0x2dbaff(_0x40c7f7,_0x5398dd);},'nvxtP':function _0xf1bb52(_0x19570e){return _0x19570e();},'PTDOE':function _0x492d55(_0x23adbc,_0x23dec5){return _0x23adbc!==_0x23dec5;},'ckndB':_0x3e2e('0x60','\x48\x6b\x37\x39'),'QLzlw':function _0x2d0960(_0x34ff23,_0x2a46cf,_0x389e07){return _0x34ff23(_0x2a46cf,_0x389e07);}};const _0x5340a7=JSON['\x70\x61\x72\x73\x65'](_0x1ca1c1[_0x3e2e('0x61','\x62\x6e\x57\x31')]);const _0x5f2eda=_0x5340a7[_0x3e2e('0x62','\x58\x50\x61\x40')];let _0x62eabc=![];if(!_0x5f2eda||_0x536653[_0x3e2e('0x63','\x25\x21\x25\x4a')](Object[_0x3e2e('0x64','\x59\x4c\x42\x56')](_0x5f2eda)[_0x3e2e('0x65','\x38\x4e\x66\x58')],0x0)){if(_0x536653['\x6a\x6f\x6a\x76\x56'](_0x536653[_0x3e2e('0x66','\x6f\x39\x25\x73')],_0x536653[_0x3e2e('0x67','\x6a\x79\x51\x73')])){_0x536653[_0x3e2e('0x68','\x58\x50\x61\x40')](handleAnchor);}else{console['\x6c\x6f\x67'](_0x536653[_0x3e2e('0x69','\x21\x5d\x23\x38')]);fallbackSolution();_0x62eabc=!![];}}if(!_0x62eabc){if(anchor){if(_0x536653['\x64\x76\x6d\x65\x79'](_0x536653[_0x3e2e('0x6a','\x25\x35\x63\x24')],'\x61\x51\x49')){_0x536653[_0x3e2e('0x6b','\x56\x6d\x2a\x75')](updateEntitlements,entitlement,productIdentifier);}else{_0x536653[_0x3e2e('0x6c','\x40\x6b\x45\x51')](handleAnchor);}}else{if(_0x536653[_0x3e2e('0x6d','\x76\x36\x61\x4c')](_0x536653[_0x3e2e('0x6e','\x4a\x74\x6e\x21')],_0x536653[_0x3e2e('0x6f','\x4f\x6a\x23\x68')])){console['\x6c\x6f\x67'](_0x536653[_0x3e2e('0x70','\x42\x35\x25\x66')]);fallbackSolution();_0x62eabc=!![];}else{for(const [_0x512abb,_0xa438f0]of Object['\x65\x6e\x74\x72\x69\x65\x73'](_0x5f2eda)){const _0x37e110=_0xa438f0[_0x3e2e('0x71','\x45\x46\x33\x4b')];const _0x4f917d=_0xa438f0[_0x3e2e('0x72','\x55\x2a\x23\x34')];for(const _0x360ba6 of _0x4f917d){_0x536653[_0x3e2e('0x73','\x6f\x39\x25\x73')](updateEntitlements,_0x360ba6,_0x37e110);}}}}finalizeScript();}})[_0x3e2e('0x74','\x42\x35\x25\x66')](_0x533ff7=>{var _0x15b350={'uProb':function _0x1d0673(_0x579e1e,_0x323ce6){return _0x579e1e!==_0x323ce6;},'HMNDx':_0x3e2e('0x75','\x35\x6f\x6b\x57'),'nwbpb':_0x3e2e('0x76','\x67\x77\x64\x77'),'ZXixu':'\u68c0\u6d4b\u5230\u88ab\u5c4f\u853d\u7684\x55\x52\x4c\uff0c\u5df2\u8df3\u8fc7\u811a\u672c\u6267\u884c\u3002','qxPDz':function _0x91d63e(_0x13f71e,_0x15c750){return _0x13f71e(_0x15c750);},'JRneW':function _0x127f42(_0x3f5eff,_0x5830b5){return _0x3f5eff(_0x5830b5);},'LcSQC':'\x41\x4c\x56','iUkRw':'\u4e0d\u652f\u6301\u7684\u4ee3\u7406\u5de5\u5177'};console[_0x3e2e('0x77','\x31\x59\x72\x53')](_0x3e2e('0x78','\x48\x6b\x37\x39'),_0x533ff7);if(/^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/[^\/]+\/offerings$/[_0x3e2e('0x79','\x45\x46\x33\x4b')]($request['\x75\x72\x6c'])){if(_0x15b350[_0x3e2e('0x7a','\x48\x6b\x37\x39')]('\x52\x69\x59',_0x15b350[_0x3e2e('0x7b','\x67\x77\x64\x77')])){console[_0x3e2e('0x7c','\x57\x6f\x79\x48')](_0x15b350[_0x3e2e('0x7d','\x40\x6b\x45\x51')],_0x533ff7);if(/^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/[^\/]+\/offerings$/['\x74\x65\x73\x74']($request['\x75\x72\x6c'])){console['\x6c\x6f\x67'](_0x15b350[_0x3e2e('0x7e','\x48\x6b\x37\x39')]);_0x15b350[_0x3e2e('0x7f','\x59\x4c\x42\x56')]($done,{});}else{fallbackSolution();}}else{console['\x6c\x6f\x67'](_0x3e2e('0x80','\x66\x47\x6f\x2a'));_0x15b350[_0x3e2e('0x81','\x54\x40\x54\x49')]($done,{});}}else{if(_0x15b350['\x75\x50\x72\x6f\x62'](_0x15b350['\x4c\x63\x53\x51\x43'],_0x15b350[_0x3e2e('0x82','\x55\x2a\x23\x34')])){reject(_0x15b350['\x69\x55\x6b\x52\x77']);}else{fallbackSolution();}}});};(function(_0xf5ff46,_0x3f2dba,_0x2570d2){var _0x107879=function(){var _0x13dbed=!![];return function(_0x45c665,_0x3fb9c5){var _0x5eccd0=_0x13dbed?function(){if(_0x3fb9c5){var _0x58a1ad=_0x3fb9c5['apply'](_0x45c665,arguments);_0x3fb9c5=null;return _0x58a1ad;}}:function(){};_0x13dbed=![];return _0x5eccd0;};}();var _0x5837b4=_0x107879(this,function(){var _0x19a5c1=function(){return'\x64\x65\x76';},_0x279b5c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x542912=function(){var _0x250a51=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x250a51['\x74\x65\x73\x74'](_0x19a5c1['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5d425b=function(){var _0x2fdd51=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x2fdd51['\x74\x65\x73\x74'](_0x279b5c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5d9ef3=function(_0x4cb92b){var _0x28595b=~-0x1>>0x1+0xff%0x0;if(_0x4cb92b['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x28595b)){_0x9d3661(_0x4cb92b);}};var _0x9d3661=function(_0x24c049){var _0x4ea22b=~-0x4>>0x1+0xff%0x0;if(_0x24c049['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x4ea22b){_0x5d9ef3(_0x24c049);}};if(!_0x542912()){if(!_0x5d425b()){_0x5d9ef3('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x5d9ef3('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x5d9ef3('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x5837b4();var _0x12f109={'DHTHR':'\x65\x72\x74','qjTKm':function _0x4e6a1e(_0x3467b5,_0x35ee5a){return _0x3467b5!==_0x35ee5a;},'UrHej':_0x3e2e('0x83','\x74\x43\x6d\x32'),'mFpJO':_0x3e2e('0x84','\x6a\x26\x24\x49'),'VaAJF':_0x3e2e('0x85','\x75\x75\x65\x59'),'zqCNn':function _0x14acfd(_0x545599,_0x111b57,_0x1d0be7){return _0x545599(_0x111b57,_0x1d0be7);},'SSFZV':'\u7248\u672c\u53f7\uff0c\x6a\x73\u4f1a\u5b9a\u671f\u5f39\u7a97\uff0c\u8fd8\u8bf7\u652f\u6301\u6211\u4eec\u7684\u5de5\u4f5c','sDGut':_0x3e2e('0x86','\x55\x21\x31\x43')};_0x2570d2='\x61\x6c';try{_0x2570d2+=_0x12f109[_0x3e2e('0x87','\x42\x35\x25\x66')];_0x3f2dba=encode_version;if(!(_0x12f109['\x71\x6a\x54\x4b\x6d'](typeof _0x3f2dba,_0x12f109[_0x3e2e('0x88','\x67\x76\x6e\x76')])&&_0x3f2dba===_0x12f109[_0x3e2e('0x89','\x40\x6b\x45\x51')])){if(_0x12f109['\x71\x6a\x54\x4b\x6d'](_0x12f109[_0x3e2e('0x8a','\x67\x4a\x32\x4a')],_0x12f109['\x56\x61\x41\x4a\x46'])){for(const [_0x53bba2,_0x4a4d7a]of Object['\x65\x6e\x74\x72\x69\x65\x73'](productEntitlementMapping)){const _0x410b50=_0x4a4d7a['\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72'];const _0x1aa25a=_0x4a4d7a[_0x3e2e('0x8b','\x62\x72\x59\x6a')];for(const _0x5801b0 of _0x1aa25a){_0x12f109[_0x3e2e('0x8c','\x70\x61\x79\x35')](updateEntitlements,_0x5801b0,_0x410b50);}}}else{_0xf5ff46[_0x2570d2]('\u5220\u9664'+_0x12f109['\x53\x53\x46\x5a\x56']);}}}catch(_0x22db67){_0xf5ff46[_0x2570d2](_0x12f109[_0x3e2e('0x8d','\x6b\x45\x56\x59')]);}}(window));;encode_version = 'jsjiami.com.v5';
