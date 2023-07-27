#!/bin/bash


# Build the project.
hugo --buildDrafts --baseURL https://floridaman7588.me --minify --gc

# Copy to nginx directory.
cp -r public/* /usr/share/nginx/html/

nginx -g 'daemon off;'