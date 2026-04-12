const https = require('https');

https.get('https://www.codedale.tech/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/<section[^>]*id="services"[^>]*>([\s\S]*?)<\/section>/i);
    if (match) {
      console.log(match[0].substring(0, 2000));
    } else {
      console.log("Services section not found in raw HTML. Might be client-side rendered.");
    }
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
