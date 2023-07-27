#!/bin/ash


# Build the project.
hugo build \
    --buildDrafts \
    --baseURL ${HUGO_BASEURL} \
    --minify \
    --gc

# Copy to nginx directory.
cp -r public/* /usr/share/nginx/html/

nginx -g daemon off