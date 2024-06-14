## Docker Version (very easy)

### How to run:
- Get the dockerfile
- change the env lines of PROXY_USER, PROXY_PASS and START_PORT
- run `docker build -t ipv6-proxy .` in the same folder of the dockerfile
- After builds end, run:

`docker run --privileged -d --name ipv6-proxy --network host ipv6-proxy`

- ⚠️ it is necessary for the container network to be "host" so that the IP addresses of the host machine are identified and used

#### the script will create a proxy for each ipv6 available on the server
#### use the `netstat -antp` command to see if it worked correctly, you will see a list of open ports starting with the port defined in START_PORT
