## Docker Version

### How to run:
- Get the dockerfile
- change the env lines of PROXY_USER, PROXY_PASS and START_PORT
- run `docker build -t ipv6-proxy .` in the same folder of the dockerfile
- After builds end, run:

`docker run -d --network host ipv6-proxy`

- ⚠️ it is necessary for the container network to be "host" so that the IP addresses of the host machine are identified and used