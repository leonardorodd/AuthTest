# Used link: https://dev.to/mubbashir10/containerize-react-app-with-docker-for-production-572b

# stage1 - build react app first
FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN yarn --silent --production=true
COPY . /app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#Build docker build -t fibre/portal-ui:latest .
#RUN docker run -it -p 3500:80 fibre/portal-ui:latest
