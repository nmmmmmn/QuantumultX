var Parr = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const times = Date.now();

const list = {
  "iphoneapp.epik": { id: "com.snowcorp.e.subscribe.plan.oneyear" },  //
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