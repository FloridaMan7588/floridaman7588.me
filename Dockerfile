FROM nginx:latest

RUN apt update && apt install hugo -y

WORKDIR /src

VOLUME /src

COPY run.sh /run.sh
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["/run.sh"]