FROM nginx:latest

RUN apt update && apt install hugo

WORKDIR ${SOURCE_DIR}

VOLUME ${SOURCE_DIR}

COPY run.sh /run.sh

EXPOSE 80

CMD ["/run.sh"]