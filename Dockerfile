FROM nginx:latest

RUN apt update && apt install hugo

WORKDIR /src

VOLUME /src

COPY run.sh /un.sh

EXPOSE 80

CMD ["run.sh"]