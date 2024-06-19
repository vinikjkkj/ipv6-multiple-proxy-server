const https = require('https')
const { HttpsProxyAgent } = require('https-proxy-agent')
const { SocksProxyAgent } = require('socks-proxy-agent')

const socksAgent = new SocksProxyAgent(`socks5://a:b@proxy-ipv6.fly.dev:443`)
const httpAgent = new HttpsProxyAgent({
    protocol: 'http',
    host: 'proxy-ipv6.fly.dev',
    username: 'a',
    password: 'b'
})

https.get('https://gologin.com/proxy-checker/', {agent: httpAgent}, res => {
    console.log(res.statusCode, res.headers);
    res.pipe(process.stdout)
})