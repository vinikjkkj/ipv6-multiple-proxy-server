## Docker Version

### How to run:
- Get the dockerfile
- run `docker build -t ipv6-proxy .` in the same folder of the dockerfile
- After builds end, run:
</br>
`docker run -d --network host -e PROXY_USER=myuser -e PROXY_PASS=mypass -e START_PORT=30000 ipv6-proxy
`
- Modify `PROXY_USER`, `PROXY_PASS` and `START_PORT` according to your preference

- ⚠️ it is necessary for the container network to be "host" so that the IP addresses of the host machine are identified and used