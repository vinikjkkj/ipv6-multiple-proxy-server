FROM ubuntu:latest
WORKDIR /app
COPY . /app

RUN apt update
RUN apt install -y make g++ wget curl cron iproute2 iptables iputils-ping net-tools tar apt-transport-https gnupg

RUN wget https://raw.githubusercontent.com/vinikjkkj/ipv6-multiple-proxy-server/master/docker/build.sh && chmod +x build.sh && ./build.sh
RUN wget https://raw.githubusercontent.com/vinikjkkj/ipv6-multiple-proxy-server/master/docker/start.sh && chmod +x start.sh

ENV PROXY_USER=user
ENV PROXY_PASS=pass
ENV START_PORT=8080

CMD "sh -c ./start.sh -u $PROXY_USER -p $PROXY_PASS --start-port $START_PORT -t http -i eth0 -b 0.0.0.0 -u a -p b"
