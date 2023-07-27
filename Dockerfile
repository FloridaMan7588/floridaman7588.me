FROM nginx:alpine

# Based off of citoyx/hugo
# See https://citoyx.com/posts/docker_traefik_hugo_server/

ENV HUGO_VERSION=0.115.4 \
    SOURCE_DIR=/src \
    HUGO_BASEURL=https://floridaman7588.me \
    HUGO_ENV=production


RUN apk --no-cache add \
        curl \
        git \
    && curl -SL https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz \
        -o /tmp/hugo.tar.gz \
    && tar -xzf /tmp/hugo.tar.gz -C /tmp \
    && mv /tmp/hugo /usr/local/bin/ \
    && apk del curl \
    && mkdir -p ${SOURCE_DIR} \
    && rm -rf /tmp/*

WORKDIR ${SOURCE_DIR}

VOLUME ${SOURCE_DIR}

COPY run.sh /run.sh

EXPOSE 80

CMD ["/run.sh"]