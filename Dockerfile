# original Dockerfile https://github.com/bitnami/bitnami-docker-nginx/blob/master/1.14/debian-9/Dockerfile
FROM bitnami/nginx:1.14.2

COPY ./dist/ /app
