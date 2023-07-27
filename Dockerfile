FROM nginx:latest

RUN apt update && apt install hugo -y

WORKDIR /src

VOLUME /src

COPY run.sh /run.sh

EXPOSE 80

CMD ["/run.sh"]