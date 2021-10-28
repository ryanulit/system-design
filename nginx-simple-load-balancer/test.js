// using node http library to avoid package.json at root

const http = require("http");

const makeRequest = () => {
  http.get('http://localhost:8080', (res) => {
    let data = [];

    res.on("data", (chunk) => data.push(chunk));

    res.on("end", () => {
      return Buffer.concat(data).toString();
    });
  }).on('error', err => {
    console.error('Error:', err.message)
  })
};

for (let i = 0; i < 3; i++) {
  console.log(makeRequest())
}
