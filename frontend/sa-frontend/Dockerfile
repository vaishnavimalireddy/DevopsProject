# FROM node:latest
# RUN mkdir -p /app
# WORKDIR /app
# COPY ./sa-frontend /app/
# WORKDIR /app/sa-frontend
# EXPOSE 3000
# CMD ["npm", "start" ]

FROM nginx:latest

COPY ./build/ /usr/share/nginx/html/

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80