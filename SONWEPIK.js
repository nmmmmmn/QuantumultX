/*************************************



[rewrite_local]
^https?:\/\/.*\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/refs/heads/main/SONWEPIK.js

[mitm]
hostname = *.snow.me

*************************************/

var Parr = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const times = Date.now();

const list = {
  "iphoneapp.epik": { id: "com.snowcorp.epik.subscribe.plan.oneyear" },  //
  "iphoneapp.snow": { id: "com.campmobile.snow.subscribe.oneyear" }  //
};

for (const key of Object.keys(list)) {
  if (new RegExp(`^${key}`, "i").test(ua)) {
    Parr.result = {
      "products": [
        {
          "managed": true,
          "status": "ACTIVE",
          "startDate": times,
          "productId": list[key].id,
          "expireDate": 4092599349000
        }
      ],
      "tickets": [
        {
          "managed": true,
          "status": "ACTIVE",
          "startDate": times,
          "productId": list[key].id,
          "expireDate": 4092599349000
        }
      ],
      "activated": true
    };
    console.log("🐈🐈🐈");
    break;
  }
}

$done({ body: JSON.stringify(Parr) });