FROM nodejs:latest

WORKDIR /opt/jobinder

COPY src ./src

COPY package.json babel.config.js ./

RUN npm i

RUN npm build

EXPOSE 3000
