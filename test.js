const https = require('https')
const { HttpsProxyAgent } = require('https-proxy-agent')

const agent = new HttpsProxyAgent({
    host: 'proxy-ipv6.fly.dev',
    username: 'a',
    password: 'b'
})

https.get('https://www.test-ipv6.com/', {agent}, res => {
    console.log(res.statusCode, res.headers);
    res.pipe(process.stdout)
})